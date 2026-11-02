/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 * Eplinx Ad Refresh Hook
 * 
 * This hook handles refreshing Eplinx ads when navigating between pages
 * in a React SPA. The Eplinx script only scans for ad slots once on load,
 * so we need to trigger a rescan when new pages are mounted.
 */

import { useEffect, useCallback, useRef } from 'react';

declare global {
    interface Window {
        refreshEplnx?: () => void;
        eplnx?: {
            refresh?: () => void;
        };
        adsbygoogle?: any[];
    }
}

/**
 * Custom hook to refresh Eplinx ads when navigating between pages
 */
export function useEplnxRefresh() {
    const refreshCountRef = useRef(0);

    const refreshEplnxAds = useCallback(() => {
        refreshCountRef.current += 1;
        console.log(`[Eplinx] Refreshing ads (attempt #${refreshCountRef.current})...`);

        // Check if Eplinx global object exists and has a refresh method
        if (window.eplnx?.refresh) {
            console.log('[Eplinx] Using native refresh method');
            window.eplnx.refresh();
            return;
        }

        // Method 1: Look for existing Eplinx script and trigger refresh
        const existingScript = document.querySelector(
            'script[src="https://media.eplinx.net/js/code.min.js"]'
        );
        
        if (existingScript) {
            console.log('[Eplinx] Found existing script, triggering scan...');
            
            // Try to find Eplinx's internal function
            if (typeof (window as any).eplnxScan === 'function') {
                (window as any).eplnxScan();
                return;
            }
            
            // Force Eplinx to rescan by re-executing the script
            const newScript = document.createElement('script');
            newScript.src = 'https://media.eplinx.net/js/code.min.js';
            newScript.async = true;
            newScript.dataset.cfasync = 'false';
            
            newScript.onload = () => {
                console.log('[Eplinx] Script reloaded successfully');
            };
            
            newScript.onerror = () => {
                console.error('[Eplinx] Failed to reload script');
            };
            
            // Don't remove old script, just add new one (Eplinx may deduplicate)
            document.body.appendChild(newScript);
        } else {
            // Method 2: No script found, load it fresh
            console.log('[Eplinx] No existing script found, loading fresh...');
            const script = document.createElement('script');
            script.src = 'https://media.eplinx.net/js/code.min.js';
            script.async = true;
            script.dataset.cfasync = 'false';
            script.onload = () => {
                console.log('[Eplinx] Script loaded fresh');
            };
            document.body.appendChild(script);
        }

        // Method 3: Also try to trigger adsbygoogle refresh for Google Ads
        if (window.adsbygoogle) {
            console.log('[Eplinx] Also refreshing Google Ads');
            try {
                (window as any).adsbygoogle.push({});
            } catch (e) {
                console.warn('[Eplinx] Google Ads refresh failed:', e);
            }
        }
    }, []);

    // Expose refresh function globally for convenience
    useEffect(() => {
        window.refreshEplnx = refreshEplnxAds;
        console.log('[Eplinx] Global refresh function exposed: window.refreshEplnx()');
        
        return () => {
            delete window.refreshEplnx;
        };
    }, [refreshEplnxAds]);

    // Set up MutationObserver to auto-detect new ad slots
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if any added nodes contain ad slots
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const el = node as Element;
                            // Check for ins-zone class or data-zone attribute
                            if (
                                el.classList?.contains('ins-zone') ||
                                el.classList?.contains('aso-zone') ||
                                el.querySelector?.('.ins-zone') ||
                                el.querySelector?.('.aso-zone') ||
                                el.hasAttribute?.('data-zone')
                            ) {
                                console.log('[Eplinx] Auto-detected new ad slot, refreshing...');
                                refreshEplnxAds();
                                break;
                            }
                        }
                    }
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, [refreshEplnxAds]);

    return { refreshEplnxAds };
}

export default useEplnxRefresh;

