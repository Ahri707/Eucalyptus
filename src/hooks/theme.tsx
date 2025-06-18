import React, { createContext, useContext, useEffect, useState } from 'react';
import { themeType } from '../entities/commonEntities/theme';
import { light, dark } from '../constants/theme'; 
import { ThemeProvider as SThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';

interface ThemeContextProps {
    theme: themeType;
    setTheme: (theme: themeType) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState<themeType>(light);
    const colorScheme = useColorScheme();

    const toggleTheme = () => {
        const newTheme = theme.name === 'light' ? dark : light;
        setTheme(newTheme);
    }

    useEffect(() => {
        setTheme(colorScheme === 'dark' ? dark : light);
    },[colorScheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <SThemeProvider theme={theme}>
                {children}
            </SThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};