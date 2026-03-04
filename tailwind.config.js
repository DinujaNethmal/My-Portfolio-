/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F172A',
        darkGray: '#1E293B',
        light: '#F8FAFC',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#EC4899',
        success: '#10B981',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

