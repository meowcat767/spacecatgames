/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React from 'react';
import { useSettings } from '../hooks/useSettings';

const PRESETS = [
    { name: 'Default', title: 'Space Cat Games - Home', icon: '/favicon.ico' },
    { name: 'Google', title: 'Google', icon: 'https://www.google.com/favicon.ico' },
    { name: 'Google Classroom', title: 'Classes', icon: 'https://ssl.gstatic.com/classroom/favicon.png' },
    { name: 'Canvas', title: 'Dashboard', icon: 'https://du11bjcvkw-gl.cloudfront.net/assets/favicon-00e97262.ico' },
    { name: 'Drive', title: 'My Drive - Google Drive', icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png' },
];

export default function Settings() {
    const { settings, updateSettings, resetSettings } = useSettings();

    const handlePresetClick = (preset: typeof PRESETS[0]) => {
        updateSettings({ tabTitle: preset.title, tabIcon: preset.icon });
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#121212', color: '#eee' }}>
            {/* Hero Section */}
            <div className="premium-hero">
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', background: 'linear-gradient(to right, #e74c3c, #3498db)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Preferences
                    </h1>
                    <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Customize your stealth identity and developer toolkit.
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: '60px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    {/* Main Settings Column */}
                    <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '40px' }}>

                        {/* Tab Cloaking Section */}
                        <section className="glass-card" style={{ padding: '40px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ fontSize: '2.5rem', width: '60px', height: '60px', background: 'rgba(231, 76, 60, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>🕵️</div>
                                <div>
                                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0' }}>Tab Cloaking</h2>
                                    <p style={{ color: '#888', margin: '5px 0 0' }}>Disguise your browser tab instantly.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div>
                                    <h3 style={{ fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', color: '#e74c3c', marginBottom: '15px' }}>Quick Presets</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
                                        {PRESETS.map((preset) => (
                                            <button
                                                key={preset.name}
                                                onClick={() => handlePresetClick(preset)}
                                                className={`premium-btn ${settings.tabTitle === preset.title ? 'premium-btn-primary' : 'premium-btn-outline'}`}
                                            >
                                                <img src={preset.icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                                <span>{preset.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', color: '#e74c3c', marginLeft: '5px', marginBottom: '8px', display: 'block' }}>Custom Title</label>
                                        <input
                                            type="text"
                                            className="premium-input"
                                            value={settings.tabTitle}
                                            onChange={(e) => updateSettings({ tabTitle: e.target.value })}
                                            placeholder="e.g. My Document"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', color: '#e74c3c', marginLeft: '5px', marginBottom: '8px', display: 'block' }}>Favicon URL</label>
                                        <input
                                            type="text"
                                            className="premium-input"
                                            value={settings.tabIcon}
                                            onChange={(e) => updateSettings({ tabIcon: e.target.value })}
                                            placeholder="https://..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Developer Mode Section */}
                        <section className="glass-card" style={{ padding: '40px', position: 'relative' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ fontSize: '2.5rem', width: '60px', height: '60px', background: 'rgba(52, 152, 219, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>💻</div>
                                    <div>
                                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0' }}>Developer Mode</h2>
                                        <p style={{ color: '#888', margin: '5px 0 0' }}>Inject scripts and styles live.</p>
                                    </div>
                                </div>
                                <div
                                    className={`premium-toggle-bg ${settings.enableCodeEditor ? 'active' : ''}`}
                                    onClick={() => updateSettings({ enableCodeEditor: !settings.enableCodeEditor })}
                                >
                                    <div className="premium-toggle-knob" />
                                </div>
                            </div>

                            {settings.enableCodeEditor && (
                                <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(52, 152, 219, 0.1)', border: '1px solid rgba(52, 152, 219, 0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🚀</span>
                                    <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#3498db', margin: 0 }}>
                                        Live Code Editor active. Look for the rocket icon in the bottom right.
                                    </p>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div className="glass-card" style={{ padding: '40px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '8px', height: '8px', background: '#e74c3c', borderRadius: '50%' }} />
                                Local Storage
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: '1.6', marginBottom: '30px' }}>
                                Your preferences are synchronized with this browser's local storage and persist across sessions.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                                    <span style={{ fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', color: '#888' }}>Registry</span>
                                    <span style={{ fontFamily: 'monospace', color: '#e74c3c', fontSize: '0.8rem' }}>local_vault</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                                    <span style={{ fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', color: '#888' }}>Status</span>
                                    <span style={{ fontSize: '0.7rem', fontWeight: '900', color: settings.enableCodeEditor ? '#2ecc71' : '#e74c3c' }}>{settings.enableCodeEditor ? 'SYNCHRONIZED' : 'IDLE'}</span>
                                </div>
                            </div>

                            <button
                                onClick={resetSettings}
                                className="premium-btn"
                                style={{ width: '100%', background: 'rgba(231, 76, 60, 0.05)', border: '1px solid rgba(231, 76, 60, 0.2)', color: '#e74c3c' }}
                            >
                                Clear localstorage
                            </button>
                        </div>

                        <div className="p-6 rounded-card border border-white/5 bg-white/[0.02] text-center" style={{ marginTop: '20px' }}>
                            <p style={{ fontSize: '0.8rem', color: '#888' }}>Space Cat Games v{__BUILD_INFO__.appVersion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
