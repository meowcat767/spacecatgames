
import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

interface Settings {
    tabTitle: string;
    tabIcon: string;
    enableCodeEditor: boolean;
    customJS: string;
    customCSS: string;
    testAprilFools: boolean;
    panicUrl: string;
    panicKey: string;
    autoDisguise: boolean;
}

const DEFAULT_SETTINGS: Settings = {
    tabTitle: 'Space Cat Games - Home',
    tabIcon: '/favicon.ico',
    enableCodeEditor: false,
    customJS: '',
    customCSS: '',
    testAprilFools: false,
    panicUrl: 'https://google.com',
    panicKey: 'Escape',
    autoDisguise: false,
};

interface SettingsContextType {
    settings: Settings;
    updateSettings: (newSettings: Partial<Settings>) => void;
    resetSettings: () => void;
    effectiveTitle: string;
    effectiveIcon: string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
);

export const SettingsProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDisguised, setIsDisguised] = useState(false);

    // Load settings from localStorage after mounting
    useEffect(() => {
        try {
            const saved = localStorage.getItem('scg_settings');

            if (saved) {
                setSettings({
                    ...DEFAULT_SETTINGS,
                    ...JSON.parse(saved)
                });
            }
        } catch (error) {
            console.error('Failed to load settings:', error);
        }

        setIsLoaded(true);
    }, []);

    // Persist settings
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            'scg_settings',
            JSON.stringify(settings)
        );

        applySettings(settings);
    }, [settings, isLoaded]);

    // Automatic tab disguise
    useEffect(() => {
        const handleVisibility = () => {
            if (settings.autoDisguise) {
                setIsDisguised(document.hidden);
            }
        };

        document.addEventListener(
            'visibilitychange',
            handleVisibility
        );

        return () => {
            document.removeEventListener(
                'visibilitychange',
                handleVisibility
            );
        };
    }, [settings.autoDisguise]);

    // Panic key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === settings.panicKey) {
                window.location.href = settings.panicUrl;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [settings.panicKey, settings.panicUrl]);

    const effectiveTitle = settings.autoDisguise
        ? (isDisguised ? settings.tabTitle : 'Space Cat Games')
        : settings.tabTitle;

    const effectiveIcon = settings.autoDisguise
        ? (isDisguised
            ? (settings.tabIcon === 'null' ? '/favicon.ico' : settings.tabIcon)
            : '/favicon.ico')
        : (settings.tabIcon === 'null' ? '/favicon.ico' : settings.tabIcon);

    const updateSettings = (newSettings: Partial<Settings>) => {
        setSettings(prev => ({
            ...prev,
            ...newSettings
        }));
    };

    const resetSettings = () => {
        setSettings(DEFAULT_SETTINGS);
    };

    return (
        <SettingsContext.Provider
            value={{
                settings,
                updateSettings,
                resetSettings,
                effectiveTitle,
                effectiveIcon
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error(
            'useSettings must be used within a SettingsProvider'
        );
    }

    return context;
};

function applySettings(settings: Settings) {
    const now = new Date();

    const isAprilFirst =
        now.getMonth() === 3 && now.getDate() === 1;

    let aprilFoolsStyle =
        document.getElementById('scg-april-fools');

    if (isAprilFirst || settings.testAprilFools) {
        if (!aprilFoolsStyle) {
            aprilFoolsStyle = document.createElement('style');
            aprilFoolsStyle.id = 'scg-april-fools';
            document.head.appendChild(aprilFoolsStyle);
        }

        aprilFoolsStyle.textContent = `
            * {
                font-family: "Comic Sans MS", "Comic Sans", cursive, sans-serif !important;
            }
        `;
    } else {
        aprilFoolsStyle?.remove();
    }

    let styleElement =
        document.getElementById('scg-custom-css');

    if (settings.customCSS) {
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'scg-custom-css';
            document.head.appendChild(styleElement);
        }

        styleElement.textContent = settings.customCSS;
    } else {
        styleElement?.remove();
    }

    if (settings.customJS) {
        try {
            eval(settings.customJS);
        } catch (error) {
            console.error('Error in custom JS:', error);
        }
    }
}
