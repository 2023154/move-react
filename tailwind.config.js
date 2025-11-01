/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0b1120',
        surface: '#111827',
        accent: '#06b6d4',
        meadow: '#34d399',
      },
    },
  },
  plugins: [],
}

