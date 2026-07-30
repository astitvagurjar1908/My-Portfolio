import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-accent/50"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-signal-amber" />
      ) : (
        <Moon size={18} className="text-accent" />
      )}
    </button>
  );
}
