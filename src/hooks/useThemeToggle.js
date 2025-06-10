import { useEffect, useState } from 'react';

const applyTheme = (theme) => {
  document.body.className = theme;
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.backgroundColor = theme === 'dark' ? '#202936' : '#D7D9E0';
  document.body.style.color = theme === 'dark' ? '#D7D9E0' : '#202936';
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
};

const useThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    let activeTheme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      activeTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      activeTheme = prefersDark ? 'dark' : 'light';
    }

    setTheme(activeTheme);
    applyTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

export default useThemeToggle;
