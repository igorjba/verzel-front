import React, { ReactNode, createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicApi } from '../../lib/axios';
import { useAuth } from './authContext';

interface LoginContextType {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    errorMessage: string;
    login: () => Promise<void>;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { setAuthData } = useAuth();
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await publicApi.post('/login', { email, password });
            setAuthData(response.data);
            navigate('/');
        } catch (error) {
            setErrorMessage('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <LoginContext.Provider value={{ email, setEmail, password, setPassword, errorMessage, login }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error('useLogin must be used within a LoginProvider');
    }
    return context;
};
