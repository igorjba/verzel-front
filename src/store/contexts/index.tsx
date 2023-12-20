import { ReactNode } from 'react';
import { ThemeProvider } from './themeContext';
import { UserSignUpProvider } from './userSignUpContext';
import { LoginProvider } from './loginContext';
import { AuthProvider } from './authContext';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <UserSignUpProvider>
          {children}
        </UserSignUpProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

