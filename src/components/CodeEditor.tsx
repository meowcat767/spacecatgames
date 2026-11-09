/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React, { useState } from 'react';
import { useSettings } from '../hooks/useSettings';

export default function CodeEditor() {
    const { settings, updateSettings } = useSettings();
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'js' | 'css'>('js');

    if (!settings.enableCodeEditor) return null;

    return (
        <div
            className={`fixed bottom-6 right-6 z-[10000] transition-all duration-500 ease-out ${isOpen ? 'w-[450px] h-[550px]' : 'w-14 h-14'
                }`}
            style={{
                background: 'rgba(15, 15, 15, 0.7)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: isOpen ? '24px' : '50%',
                boxShadow: isOpen
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(52, 152, 219, 0.1)'
                    : '0 10px 20px rgba(0, 0, 0, 0.4)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-full h-full flex items-center justify-center text-2xl hover:bg-white/10 transition-all duration-300 group"
                    title="Open Code Injector"
                >
                    <span className="group-hover:scale-110 transition-transform">🚀</span>
                </button>
            ) : (
                <>
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="flex items-center gap-3">
                            <span className="text-xl">🛠️</span>
                            <h3 style={{ fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Code Injector</h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: 'flex', padding: '12px', gap: '8px', background: 'rgba(0,0,0,0.3)', margin: '15px 20px 0', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <button
                            onClick={() => setActiveTab('js')}
                            className="premium-btn"
                            style={{ flex: 1, padding: '10px', fontSize: '0.65rem', background: activeTab === 'js' ? 'linear-gradient(to right, #e74c3c, #c0392b)' : 'transparent', color: activeTab === 'js' ? 'white' : '#888', border: 'none' }}
                        >
                            JavaScript
                        </button>
                        <button
                            onClick={() => setActiveTab('css')}
                            className="premium-btn"
                            style={{ flex: 1, padding: '10px', fontSize: '0.65rem', background: activeTab === 'css' ? 'linear-gradient(to right, #3498db, #2980b9)' : 'transparent', color: activeTab === 'css' ? 'white' : '#888', border: 'none' }}
                        >
                            CSS Styles
                        </button>
                    </div>

                    {/* Editor Area */}
                    <div style={{ flex: 1, padding: '20px', position: 'relative' }}>
                        <textarea
                            className="premium-input"
                            style={{ height: '100%', fontSize: '0.75rem', fontFamily: 'monospace', resize: 'none' }}
                            placeholder={activeTab === 'js' ? "// Write your logic here..." : "/* Add your custom styles... */"}
                            value={activeTab === 'js' ? settings.customJS : settings.customCSS}
                            onChange={(e) => updateSettings({ [activeTab === 'js' ? 'customJS' : 'customCSS']: e.target.value })}
                            spellCheck={false}
                        />
                        <div style={{ position: 'absolute', bottom: '40px', right: '40px', pointerEvents: 'none', opacity: 0.1, fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', color: activeTab === 'js' ? '#e74c3c' : '#3498db' }}>
                            {activeTab === 'js' ? 'JS' : 'CSS'}
                        </div>
                    </div>

                    {/* Footer Controls */}
                    <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="animate-pulse-glow" style={{ width: '8px', height: '8px', background: '#2ecc71', borderRadius: '50%' }} />
                            <span style={{ fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', letterSpacing: '1.5px' }}>Link Active</span>
                        </div>
                        <button
                            onClick={() => {
                                if (confirm('Wipe ' + activeTab.toUpperCase() + ' memory buffer?')) {
                                    updateSettings({ [activeTab === 'js' ? 'customJS' : 'customCSS']: '' });
                                }
                            }}
                            style={{ background: 'none', border: 'none', color: '#e74c3c', fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer', padding: '8px 12px', borderRadius: '12px' }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(231,76,60,0.1)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'none'}
                        >
                            Clear Buffer
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
