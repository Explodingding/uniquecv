/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#a5b4fc',
          DEFAULT: '#6366f1',
          dark: '#4338ca',
        },
        accent: {
          light: '#f0abfc',
          DEFAULT: '#e879f9',
          dark: '#c026d3',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #6366f1 0%, #e879f9 100%)',
      },
    },
  },
  plugins: [],
}

