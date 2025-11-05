import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-800/40 transition-all duration-300 shadow-sm hover:shadow-md"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-green-700 dark:text-green-300" />
      ) : (
        <Sun className="w-5 h-5 text-green-700 dark:text-green-300" />
      )}
    </button>
  );
};
