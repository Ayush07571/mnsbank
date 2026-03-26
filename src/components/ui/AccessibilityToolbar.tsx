'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface AccessibilityToolbarProps {
  className?: string;
}

export function AccessibilityToolbar({ className }: AccessibilityToolbarProps) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    if (fontSize === 'normal') {
      setFontSize('large');
      document.documentElement.style.fontSize = '18px';
    } else if (fontSize === 'large') {
      setFontSize('extra-large');
      document.documentElement.style.fontSize = '20px';
    }
  };

  const decreaseFontSize = () => {
    if (fontSize === 'extra-large') {
      setFontSize('large');
      document.documentElement.style.fontSize = '18px';
    } else if (fontSize === 'large') {
      setFontSize('normal');
      document.documentElement.style.fontSize = '16px';
    }
  };

  const toggleContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    
    if (newContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const resetAccessibility = () => {
    setFontSize('normal');
    setHighContrast(false);
    document.documentElement.style.fontSize = '16px';
    document.documentElement.classList.remove('high-contrast');
  };

  return (
    <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 ${className}`}>
      <div className="bg-surface border border-border rounded-card p-2 shadow-lg">
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={increaseFontSize}
            className="h-8 w-8"
            aria-label="Increase font size"
            title="Increase Font Size"
          >
            <span className="text-lg font-bold">A+</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseFontSize}
            className="h-8 w-8"
            aria-label="Decrease font size"
            title="Decrease Font Size"
          >
            <span className="text-sm font-bold">A-</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleContrast}
            className={`h-8 w-8 ${highContrast ? 'bg-brand-accent text-white' : ''}`}
            aria-label="Toggle high contrast"
            title="High Contrast"
          >
            <span className="font-bold">◉</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={resetAccessibility}
            className="h-8 w-8"
            aria-label="Reset accessibility settings"
            title="Reset"
          >
            <span className="text-xs">⟲</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
