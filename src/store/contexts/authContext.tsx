import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthData {
    token: string;
    user: {
        id: string;
        name: string;
        role: 'USER' | 'ADMIN';
    };
}

interface AuthContextType {
    authData: AuthData | null;
    setAuthData: (data: AuthData) => void;
    clearAuthData: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData | null>(() => {
        const storedData = localStorage.getItem('authData');
        return storedData ? JSON.parse(storedData) : null;
    });

    const clearAuthData = () => {
        setAuthData(null);
        localStorage.removeItem('authData');
    };

    useEffect(() => {
        if (authData) {
            localStorage.setItem('authData', JSON.stringify(authData));
        }
    }, [authData]);

    return (
        <AuthContext.Provider value={{ authData, setAuthData, clearAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
