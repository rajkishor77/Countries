import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const initialTheme = localStorage.getItem('theme') || 'light';
    
    const [theme, setTheme] = useState(initialTheme);

    function toggleTheme(){
        const newTheme = (theme==='light')?'dark':'light';

        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
