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
      aria-label="Toggle dark mode"
      className="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white/80 text-stone-600 shadow-sm transition hover:bg-lavender-100 hover:text-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800"
      type="button"
      onClick={() => setIsDark((current) => !current)}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
