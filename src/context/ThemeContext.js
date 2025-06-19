import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const applyTheme = (theme) => {
  document.body.className = theme;
  document.documentElement.setAttribute('data-bs-theme', theme);
  // document.documentElement.setAttribute('data-bs-theme-color', theme === 'dark' ? 'dark' : 'light');
  
  // Set custom color theme attribute
  // document.documentElement.setAttribute('data-color-theme', 'Blue_Theme');
  // document.documentElement.setAttribute('data-color-theme', 'Aqua_Theme');
  // document.documentElement.setAttribute('data-color-theme', 'Purple_Theme');
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
