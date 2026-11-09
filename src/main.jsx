/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import React, { useEffect } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/navbar.tsx'
import Home from './index.jsx'
import Games from './games.jsx'
import Credits from './credits.jsx'
import Archive from './archive.jsx'
import Opensource from './opensource.jsx'
import Changelog from './changelog.jsx'
import Privacy from './privacy.jsx'
import DebugDashboard from './components/DebugDashboard.jsx'
import { SettingsProvider, useSettings } from './hooks/useSettings.tsx'
import SettingsPage from './components/Settings.tsx'
import CodeEditor from './components/CodeEditor.tsx'
import { useEplnxRefresh } from './hooks/useEplnxRefresh'
import { Helmet } from 'react-helmet'

// Component to handle route changes and refresh ads
function RouteChangeHandler() {
    const location = useLocation()
    const { refreshEplnxAds } = useEplnxRefresh()

    useEffect(() => {
        // Refresh ads on every route change
        // Small delay to ensure DOM has updated with new ad slots
        const timer = setTimeout(() => {
            refreshEplnxAds()
        }, 100)

        return () => clearTimeout(timer)
    }, [location.pathname, refreshEplnxAds])

    return null
}

function AppContent() {
    const { settings } = useSettings()

    return (
        <BrowserRouter>
            <Helmet>
                <title>{settings.tabTitle}</title>
                <link rel="icon" href={settings.tabIcon} />
            </Helmet>
            <RouteChangeHandler />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/opensource" element={<Opensource />} />
                <Route path="/changelog" element={<Changelog />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/debug" element={<DebugDashboard />} />
                <Route path="/settings" element={<SettingsPage />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <CodeEditor />
        </BrowserRouter>
    )
}

function App() {
    return (
        <SettingsProvider>
            <AppContent />
        </SettingsProvider>
    )
}

// Mount React
const rootEl = document.getElementById('root')
if (rootEl) {
    const root = createRoot(rootEl)
    root.render(<App />)
} else {
    console.warn('Root element not found; cannot mount React app')
}

