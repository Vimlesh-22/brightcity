"use client";

import React from 'react';
import { useTheme } from '@/lib/contexts/theme-context';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import Link from 'next/link';

const colorPalettes = [
  {
    name: 'Light Theme',
    description: 'Clean and bright with dark blue accents',
    colors: [
      { name: 'Background', color: 'bg-white', description: 'Pure white background' },
      { name: 'Primary', color: 'bg-blue-900', description: 'Dark blue for primary elements' },
      { name: 'Secondary', color: 'bg-sky-200', description: 'Sky blue for secondary elements' },
      { name: 'Accent', color: 'bg-yellow-400', description: 'Yellow for highlights' },
      { name: 'Text', color: 'bg-gray-900', description: 'Black text for readability' },
    ],
    theme: 'light' as const,
  },
  {
    name: 'Dark Theme',
    description: 'Rich dark blue with sky blue highlights',
    colors: [
      { name: 'Background', color: 'bg-blue-900', description: 'Dark blue background' },
      { name: 'Primary', color: 'bg-sky-400', description: 'Sky blue for primary elements' },
      { name: 'Secondary', color: 'bg-yellow-400', description: 'Yellow for secondary elements' },
      { name: 'Accent', color: 'bg-white', description: 'White for highlights' },
      { name: 'Text', color: 'bg-white', description: 'White text for contrast' },
    ],
    theme: 'dark' as const,
  },
];

export default function ThemePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gradient mb-4">Theme Selection</h1>
          <p className="text-lg text-muted-foreground">
            Choose your preferred color theme for the best browsing experience
          </p>
        </div>

        {/* Current Theme Display */}
        <div className="mb-8 p-6 bg-card border border-border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Palette size={24} />
            Current Theme
          </h2>
          <div className="flex items-center gap-4">
            {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
            <span className="text-xl font-medium capitalize">{theme} Theme</span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              Active
            </span>
          </div>
        </div>

        {/* Theme Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {colorPalettes.map((palette) => (
            <div
              key={palette.theme}
              className={`p-6 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                theme === palette.theme
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50 hover:bg-card/50'
              }`}
              onClick={() => setTheme(palette.theme)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{palette.name}</h3>
                {theme === palette.theme && (
                  <div className="flex items-center gap-2 text-primary">
                    <Check size={20} />
                    <span className="text-sm font-medium">Selected</span>
                  </div>
                )}
              </div>
              
              <p className="text-muted-foreground mb-6">{palette.description}</p>
              
              {/* Color Palette Preview */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground">Color Palette:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {palette.colors.map((color, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded ${color.color} border border-border`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{color.name}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {color.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Preview */}
              <div className="mt-6 p-4 rounded border border-border bg-background">
                <h4 className="font-medium text-sm mb-3">Preview:</h4>
                <div className="space-y-2">
                  <div className="h-3 bg-primary rounded"></div>
                  <div className="h-2 bg-secondary rounded"></div>
                  <div className="h-2 bg-muted rounded"></div>
                  <div className="h-1 bg-accent rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Theme Information */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-semibold mb-4">About Our Theme System</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Color Philosophy</h4>
              <p className="text-sm text-muted-foreground">
                Our themes are designed with accessibility in mind, using high contrast ratios 
                and carefully selected color combinations that work well for all users.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Automatic Saving</h4>
              <p className="text-sm text-muted-foreground">
                Your theme preference is automatically saved and will be remembered 
                across all your visits to our site.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => setTheme('light')}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Sun size={16} />
            Switch to Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <Moon size={16} />
            Switch to Dark
          </button>
        </div>
      </div>
    </div>
  );
}