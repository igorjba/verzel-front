import { ReactNode, useMemo, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createContext as createContextSelector } from 'use-context-selector';
import { darkTheme } from '../../styles/themes/darkTheme';
import { defaultTheme } from '../../styles/themes/defaultTheme';

interface ThemeContextData {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContextSelector<ThemeContextData>({} as ThemeContextData);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const themeObject = useMemo(() => (theme === 'light' ? defaultTheme : darkTheme), [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={themeObject}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
