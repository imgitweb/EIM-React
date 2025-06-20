import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const applyTheme = (theme) => {
  document.body.className = theme;
  document.documentElement.setAttribute("data-bs-theme", theme);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // On initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  // On theme change
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
