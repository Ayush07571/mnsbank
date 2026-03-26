/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1A3A6B',
        'brand-accent': '#C8A84B',
        'text-primary': '#1A1A1A',
        'text-secondary': '#555555',
        'background': '#FFFFFF',
        'surface': '#F5F7FA',
        'border': '#E0E4EC',
        'success': '#2E7D32',
        'error': '#C62828',
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
