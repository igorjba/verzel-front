import React, { useState, createContext, useContext, ReactNode } from 'react';

interface SignUpData {
    name: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
}

interface UserSignUpContextType {
    signUpData: SignUpData;
    setSignUpData: (data: SignUpData) => void;
}

const UserSignUpContext = createContext<UserSignUpContextType | undefined>(undefined);

export const UserSignUpProvider = ({ children }: { children: ReactNode }) => {
    const [signUpData, setSignUpData] = useState<SignUpData>({ name: '', email: '', password: '', role: 'USER' });

    return (
        <UserSignUpContext.Provider value={{ signUpData, setSignUpData }}>
            {children}
        </UserSignUpContext.Provider>
    );
};

export const useUserSignUp = () => {
    const context = useContext(UserSignUpContext);
    if (!context) {
        throw new Error('useUserSignUp must be used within a UserSignUpProvider');
    }
    return context;
};
