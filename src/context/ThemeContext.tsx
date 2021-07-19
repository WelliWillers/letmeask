import { ReactNode, createContext, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';

//styles
import { GlobalStyle } from '../global/themeGlobal';
import DefaultTheme from '../global/styled';
import {light, dark} from '../global/theme';

type ThemeContextType = {
    isLight:boolean,
    theme: typeof DefaultTheme | undefined,
    toggleTheme: () => void;
}

type themeContextProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({children}: themeContextProviderProps){
    const [theme, setTheme] = useState(light);
    const isLight = theme.isLight;

    useEffect(() => {
        const localTheme = window.localStorage.getItem("@letmeask/nlwtheme");
    
        localTheme && setTheme(JSON.parse(localTheme));
    }, []);
    
    const toggleTheme = () => {
        if (isLight) {
            window.localStorage.setItem("@letmeask/nlwtheme", JSON.stringify(dark));
            setTheme(dark);
        } else {
            window.localStorage.setItem("@letmeask/nlwtheme", JSON.stringify(light));
            setTheme(light);
        }
    };
    
    return (
        <ThemeContext.Provider
            value={{
                isLight,
                theme,
                toggleTheme,
            }}
        >
            <ThemeProvider theme={theme} >
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}