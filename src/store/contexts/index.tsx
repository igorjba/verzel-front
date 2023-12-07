import { ReactNode } from 'react';
import { ThemeProvider } from './themeContext';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

