import { useState, createContext } from "react";

export const ThemeContext = createContext(null);

 const ThemeProvider = ({ Children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'Dark' : 'light'));
    };

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {Children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider