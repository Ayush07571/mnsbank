'use client';

import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

// Manual SVG Icons with explicit display and size
const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cn("block", className)}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cn("block", className)}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const ContrastIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cn("block", className)}><circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/></svg>
);

const TypeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cn("block", className)}><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
);

const RotateCcwIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cn("block", className)}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={cn("block", className)}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={cn("block", className)}><path d="M5 12h14"/></svg>
);

interface AccessibilityToolbarProps {
  className?: string;
}

export function AccessibilityToolbar({ className }: AccessibilityToolbarProps) {
  const { theme, fontSize, setTheme, setFontSize, resetAll } = useTheme();

  const increaseFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('extra-large');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'extra-large') setFontSize('large');
    else if (fontSize === 'large') setFontSize('normal');
  };

  return (
    <div className={cn(
      "fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2",
      className
    )}>
      <div className="bg-surface border-2 border-border rounded-xl p-2 shadow-2xl backdrop-blur-sm bg-surface/90">
        <div className="flex flex-col gap-3">
          {/* Font Size Controls */}
          <div className="flex flex-col gap-1 border-b border-border pb-2">
            <button
              onClick={increaseFontSize}
              disabled={fontSize === 'extra-large'}
              className={cn(
                "h-9 w-9 flex items-center justify-center rounded-lg transition-colors",
                fontSize === 'extra-large' ? "opacity-50 cursor-not-allowed" : "hover:bg-brand-primary/10 text-text-primary"
              )}
              aria-label="Increase font size"
              title="Increase Font Size"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
            
            <div className="flex items-center justify-center py-1">
              <TypeIcon className="h-4 w-4 text-text-secondary" />
            </div>

            <button
              onClick={decreaseFontSize}
              disabled={fontSize === 'normal'}
              className={cn(
                "h-9 w-9 flex items-center justify-center rounded-lg transition-colors",
                fontSize === 'normal' ? "opacity-50 cursor-not-allowed" : "hover:bg-brand-primary/10 text-text-primary"
              )}
              aria-label="Decrease font size"
              title="Decrease Font Size"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
          </div>
          
          {/* Theme Controls */}
          <div className="flex flex-col gap-2 border-b border-border pb-2">
            <button
              onClick={() => setTheme('light')}
              className={cn(
                "h-9 w-9 flex items-center justify-center rounded-lg transition-all",
                theme === 'light' ? 'bg-brand-primary text-white shadow-md' : 'hover:bg-brand-primary/10 text-text-primary'
              )}
              aria-label="Light mode"
              title="Light Mode"
            >
              <SunIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={cn(
                "h-9 w-9 flex items-center justify-center rounded-lg transition-all",
                theme === 'dark' ? 'bg-brand-primary text-white shadow-md' : 'hover:bg-brand-primary/10 text-text-primary'
              )}
              aria-label="Dark mode"
              title="Dark Mode"
            >
              <MoonIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => setTheme('high-contrast')}
              className={cn(
                "h-9 w-9 flex items-center justify-center rounded-lg transition-all",
                theme === 'high-contrast' ? 'bg-brand-primary text-white shadow-md' : 'hover:bg-brand-primary/10 text-text-primary'
              )}
              aria-label="High contrast mode"
              title="High Contrast"
            >
              <ContrastIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Reset Control */}
          <button
            onClick={resetAll}
            className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-error/10 hover:text-error text-text-secondary transition-colors"
            aria-label="Reset all accessibility settings"
            title="Reset All"
          >
            <RotateCcwIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
