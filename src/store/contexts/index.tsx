import { ReactNode } from 'react';
import { ThemeProvider } from './themeContext';
import { UserSignUpProvider } from './userSignUpContext';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <UserSignUpProvider>
        {children}
      </UserSignUpProvider>
    </ThemeProvider>
  );
}

