import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const storageKey = 'thomas-shin-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return false;
  }

  const storedTheme = window.localStorage.getItem(storageKey);

  if (storedTheme) {
    return storedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="theme-toggle"
      type="button"
      onClick={() => setIsDark((current) => !current)}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
