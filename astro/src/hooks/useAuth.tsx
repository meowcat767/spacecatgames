
import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

import netlifyIdentity from 'netlify-identity-widget';
import posthog from '../utils/posthog';

const NETLIFY_IDENTITY_URL =
    'https://spacecatgame.netlify.app/.netlify/identity';

export interface NetlifyUser {
    id: string;
    email: string;
    user_metadata: {
        full_name?: string;
        avatar_url?: string;
    };
}

interface AuthContextType {
    user: NetlifyUser | null;
    login: () => void;
    logout: () => void;
    isSupported: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AuthProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [user, setUser] = useState<NetlifyUser | null>(null);
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        const hostname = window.location.hostname;

        const supported =
            hostname === 'spacecatgame.netlify.app' ||
            hostname === 'localhost' ||
            hostname === '127.0.0.1';

        setIsSupported(supported);

        if (!supported) return;

        netlifyIdentity.init({
            APIUrl: NETLIFY_IDENTITY_URL
        });

        const current = netlifyIdentity.currentUser() as NetlifyUser | null;

        if (current) {
            setUser(current);
        }

        const handleLogin = (u: unknown) => {
            const netlifyUser = u as NetlifyUser;

            setUser(netlifyUser);
            netlifyIdentity.close();

            posthog.identify(netlifyUser.id, {
                email: netlifyUser.email,
                name: netlifyUser.user_metadata?.full_name
            });

            posthog.capture('user logged in', {
                login_method: 'netlify_identity'
            });
        };

        const handleLogout = () => {
            posthog.capture('user logged out');
            posthog.reset();
            setUser(null);
        };

        netlifyIdentity.on('login', handleLogin);
        netlifyIdentity.on('logout', handleLogout);

        return () => {
            netlifyIdentity.off('login', handleLogin);
            netlifyIdentity.off('logout', handleLogout);
        };
    }, []);

    const login = () => {
        if (isSupported) {
            netlifyIdentity.open('login');
        }
    };

    const logout = () => {
        if (isSupported) {
            netlifyIdentity.logout();
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isSupported
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            'useAuth must be used within an AuthProvider'
        );
    }

    return context;
};
