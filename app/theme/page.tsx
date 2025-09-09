"use client";

import React from 'react';
import { useTheme } from '@/lib/contexts/theme-context';
import { Moon, Sun, Monitor, Palette, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';

const ThemePage = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const themes = [
    {
      value: 'light',
      icon: Sun,
      label: 'Light Theme',
      description: 'Clean and bright interface with white backgrounds',
      preview: 'bg-white text-black border-gray-200',
    },
    {
      value: 'dark',
      icon: Moon,
      label: 'Dark Theme',
      description: 'Easy on the eyes with dark blue backgrounds',
      preview: 'bg-blue-900 text-white border-blue-700',
    },
    {
      value: 'system',
      icon: Monitor,
      label: 'System Theme',
      description: 'Automatically matches your system preference',
      preview: 'bg-gradient-to-r from-white to-blue-900 text-gray-800 border-gray-400',
    },
  ] as const;

  const colorPalette = [
    { name: 'Dark Blue', color: 'bg-theme-dark-blue', hex: '#003366' },
    { name: 'Sky Blue', color: 'bg-theme-sky-blue', hex: '#87CEEB' },
    { name: 'Yellow', color: 'bg-theme-yellow', hex: '#FFD700' },
    { name: 'White', color: 'bg-theme-white border border-gray-300', hex: '#FFFFFF' },
    { name: 'Black', color: 'bg-theme-black', hex: '#000000' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Theme Settings</h1>
          <p className="text-muted-foreground text-lg">
            Customize your BrightCity experience with our beautiful theme options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Theme Selection */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Palette size={24} />
                Choose Your Theme
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {themes.map(({ value, icon: Icon, label, description, preview }) => (
                  <div
                    key={value}
                    className={`
                      relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:scale-105
                      ${theme === value 
                        ? 'border-primary bg-primary/5 shadow-lg' 
                        : 'border-border bg-card hover:border-primary/50'
                      }
                    `}
                    onClick={() => setTheme(value)}
                  >
                    {theme === value && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-primary text-primary-foreground rounded-full p-1">
                          <Check size={16} />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className={`p-4 rounded-full ${preview}`}>
                        <Icon size={32} />
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">{label}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Theme Info */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Current Theme Status</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Selected: <strong className="text-foreground">{theme}</strong></span>
                  <span>•</span>
                  <span>Active: <strong className="text-foreground">{actualTheme}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette Preview */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                Color Palette
              </h2>
              <p className="text-muted-foreground mb-6">
                Our theme uses these beautiful colors to create a cohesive experience
              </p>
              
              <div className="space-y-4">
                {colorPalette.map(({ name, color, hex }) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${color}`}></div>
                    <div className="flex-1">
                      <div className="font-medium text-card-foreground">{name}</div>
                      <div className="text-sm text-muted-foreground font-mono">{hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme Preview */}
            <div className="mt-6 bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Live Preview</h3>
              
              <div className="space-y-4">
                {/* Sample UI Elements */}
                <div className="p-4 bg-background border border-border rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Sample Card</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    This is how your content will look with the current theme.
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">
                      Primary
                    </button>
                    <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">
                      Secondary
                    </button>
                    <button className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm">
                      Accent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 bg-card rounded-lg border border-border p-6">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            Theme Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 text-primary p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Sun size={24} />
              </div>
              <h3 className="font-medium text-card-foreground mb-2">Light Mode</h3>
              <p className="text-sm text-muted-foreground">
                Clean, bright interface perfect for daytime use
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 text-primary p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Moon size={24} />
              </div>
              <h3 className="font-medium text-card-foreground mb-2">Dark Mode</h3>
              <p className="text-sm text-muted-foreground">
                Easy on the eyes with beautiful dark blue tones
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary/10 text-secondary p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Palette size={24} />
              </div>
              <h3 className="font-medium text-card-foreground mb-2">Custom Colors</h3>
              <p className="text-sm text-muted-foreground">
                Carefully crafted color palette for optimal readability
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 text-accent-foreground p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Monitor size={24} />
              </div>
              <h3 className="font-medium text-card-foreground mb-2">System Sync</h3>
              <p className="text-sm text-muted-foreground">
                Automatically follows your system preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;