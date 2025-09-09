"use client";

import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '@/lib/contexts/theme-context';
import Link from 'next/link';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </button>
      <Link
        href="/theme"
        className="p-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-colors duration-200"
        aria-label="Open theme selection page"
      >
        <Palette size={20} />
      </Link>
    </div>
  );
}