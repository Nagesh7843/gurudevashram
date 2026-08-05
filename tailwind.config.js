/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: '#f4b942',
        gold: '#d8a93b',
        forest: '#214a2d',
        cream: '#f8f4e8',
        ink: '#1f2937'
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        kannada: ['Noto Sans Kannada', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(244, 185, 66, 0.25)'
      },
      backgroundImage: {
        mandala: 'radial-gradient(circle, rgba(244,185,66,0.18) 0, transparent 45%)'
      }
    }
  },
  plugins: []
};
