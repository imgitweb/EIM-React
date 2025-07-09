import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const applyTheme = (theme) => {
  document.body.className = theme;
  document.documentElement.setAttribute("data-bs-theme", theme);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Always apply light theme on initial load
  useEffect(() => {
    setTheme("light");
  }, []);

  // Apply and persist the theme
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // If you want to keep the toggle, this will still allow switching manually
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
