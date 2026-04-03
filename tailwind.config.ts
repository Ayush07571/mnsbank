/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--brand-primary)',
        'brand-accent': 'var(--brand-accent)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'background': 'var(--background)',
        'surface': 'var(--surface)',
        'border': 'var(--border)',
        'success': 'var(--success)',
        'error': 'var(--error)',
      },
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
      },
      fontWeight: {
        'heading': '700',
        'body': '400',
      },
      borderRadius: {
        'card': '8px',
        'input': '4px',
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}
