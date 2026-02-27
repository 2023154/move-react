/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light & Clean Agency Palette
        'brand-primary': '#1e3a8a', // Deep Navy Blue (Blue 900)
        'brand-secondary': '#0EA5E9', // Sky Blue
        'brand-accent': '#6366F1', // Indigo
        'move-gray-light': '#09090B', // Zinc 950 (Text)
        'move-gray-dark': '#FFFFFF', // White (Background)
        'move-gold': '#2563EB', // Blue accent
        'move-green': '#0EA5E9', // Sky accent
        'move-beige': '#F8FAFC', 
        // Cores base do sistema
        night: '#F8FAFC', // Very light gray
        surface: '#FFFFFF',
        accent: '#2563EB',
        meadow: '#0EA5E9',
      },
      backgroundImage: {
        'metallic-green': 'linear-gradient(145deg, #2563EB, #1D4ED8)',
        'metallic-light': 'linear-gradient(145deg, #FFFFFF, #F1F5F9)',
        'metallic-dark': 'linear-gradient(145deg, #F8FAFC, #FFFFFF)',
        'metallic-gold': 'linear-gradient(145deg, #0EA5E9, #0284C7)',
        'metallic-beige': 'linear-gradient(145deg, #F1F5F9, #E2E8F0)',
      },
      boxShadow: {
        'metallic': 'inset 0 1px 0 0 rgba(255,255,255,0.15), 0 2px 8px -2px rgba(0,0,0,0.1)',
        'metallic-hover': 'inset 0 1px 0 0 rgba(255,255,255,0.2), 0 3px 10px -2px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
