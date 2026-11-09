/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React, { createContext, useContext, useEffect, useState } from 'react';

interface Settings {
    tabTitle: string;
    tabIcon: string;
    enableCodeEditor: boolean;
    customJS: string;
    customCSS: string;
}

const DEFAULT_SETTINGS: Settings = {
    tabTitle: 'Space Cat Games - Home',
    tabIcon: '/favicon.ico',
    enableCodeEditor: false,
    customJS: '',
    customCSS: '',
};

interface SettingsContextType {
    settings: Settings;
    updateSettings: (newSettings: Partial<Settings>) => void;
    resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<Settings>(() => {
        const saved = localStorage.getItem('scg_settings');
        return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    });

    useEffect(() => {
        localStorage.setItem('scg_settings', JSON.stringify(settings));
        applySettings(settings);
    }, [settings]);

    const updateSettings = (newSettings: Partial<Settings>) => {
        setSettings((prev) => ({ ...prev, ...newSettings }));
    };

    const resetSettings = () => {
        setSettings(DEFAULT_SETTINGS);
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};

function applySettings(settings: Settings) {
    // Apply Custom CSS
    let styleElement = document.getElementById('scg-custom-css');
    if (settings.customCSS) {
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'scg-custom-css';
            document.head.appendChild(styleElement);
        }
        styleElement.textContent = settings.customCSS;
    } else if (styleElement) {
        styleElement.remove();
    }

    // Apply Custom JS (Note: This is risky, but requested)
    if (settings.customJS) {
        try {
            // We use a function wrapper to avoid polluting global scope too much
            // and to catch errors
            const scriptId = 'scg-custom-js-container';
            let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

            // If we want to re-run on every setting change, we'd remove and re-add.
            // But for QoL, usually users want it to run once per load or when edited.
            // For "live" feel, we can eval it.

            // SAFETY: Avoid running on every tiny character change if typing fast?
            // For now, let's just eval.
            eval(settings.customJS);
        } catch (e) {
            console.error('Error in custom JS:', e);
        }
    }
}
