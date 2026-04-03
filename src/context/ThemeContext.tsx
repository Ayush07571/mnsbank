'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'high-contrast';
type FontSize = 'normal' | 'large' | 'extra-large';

interface ThemeContextType {
  theme: Theme;
  fontSize: FontSize;
  setTheme: (theme: Theme) => void;
  setFontSize: (size: FontSize) => void;
  resetAll: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [fontSize, setFontSizeState] = useState<FontSize>('normal');
  const [mounted, setMounted] = useState(false);
  
  // Initialize from localStorage only after mounting on the client
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedTheme = localStorage.getItem('mns-theme') as Theme;
    const savedFontSize = localStorage.getItem('mns-font-size') as FontSize;

    // Use setTimeout to avoid synchronous setState in effect (lint requirement)
    setTimeout(() => {
      if (savedTheme && ['light', 'dark', 'high-contrast'].includes(savedTheme)) {
        setThemeState(savedTheme);
      }
      if (savedFontSize && ['normal', 'large', 'extra-large'].includes(savedFontSize)) {
        setFontSizeState(savedFontSize);
      }
      setMounted(true);
    }, 0);
  }, []);

  // Apply theme and font size effects
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Theme logic
    root.classList.remove('dark', 'high-contrast');
    if (theme === 'dark') root.classList.add('dark');
    if (theme === 'high-contrast') root.classList.add('high-contrast');
    localStorage.setItem('mns-theme', theme);

    // Font size logic
    const fontSizes = {
      'normal': '16px',
      'large': '18px',
      'extra-large': '20px'
    };
    root.style.fontSize = fontSizes[fontSize];
    localStorage.setItem('mns-font-size', fontSize);
  }, [theme, fontSize, mounted]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);
  const setFontSize = (newSize: FontSize) => setFontSizeState(newSize);
  
  const resetAll = () => {
    setThemeState('light');
    setFontSizeState('normal');
  };

  return (
    <ThemeContext.Provider value={{ theme, fontSize, setTheme, setFontSize, resetAll }}>
      <div className={!mounted ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
