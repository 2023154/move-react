/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores principais do MOVE
  'move-green': '#009B4D', // Verde esmeralda da Irlanda
        'move-gray-light': '#E6E6E3', // Cinza claro metálico
        'move-gray-dark': '#2F3B3C', // Cinza escuro grafite
        'move-gold': '#C2A46B', // Dourado desbotado
        'move-beige': '#F1EFEA', // Bege neutro
        // Cores base do sistema
        night: '#0b1120',
        surface: '#111827',
        accent: '#06b6d4',
        meadow: '#34d399',
      },
      backgroundImage: {
        'metallic-green': 'linear-gradient(145deg, #009B4D, #1e5c37)',
        'metallic-light': 'linear-gradient(145deg, #E6E6E3, #d8d8d5)',
        'metallic-dark': 'linear-gradient(145deg, #2F3B3C, #252f30)',
        'metallic-gold': 'linear-gradient(145deg, #C2A46B, #b39661)',
        'metallic-beige': 'linear-gradient(145deg, #F1EFEA, #e3e1dc)',
      },
      boxShadow: {
        'metallic': 'inset 0 1px 0 0 rgba(255,255,255,0.15), 0 2px 8px -2px rgba(0,0,0,0.1)',
        'metallic-hover': 'inset 0 1px 0 0 rgba(255,255,255,0.2), 0 3px 10px -2px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
