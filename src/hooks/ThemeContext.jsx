import React, {createContext, useState, useContext} from "react";

//Criação do contexto
const ThemeContext = createContext();

//Uso do Context
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error("useContext must be used within a Provider")
    }
    return context;
}

//Provider (provedor) do contexto
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light'? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}