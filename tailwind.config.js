/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B16',
          900: '#0B1220',
          800: '#0F1B2E',
          700: '#152238',
          600: '#1D2E4A',
        },
        accent: {
          400: '#5B9DFF',
          500: '#2F6FED',
          600: '#1E54C4',
        },
        mist: {
          100: '#F8FAFC',
          200: '#EEF2F7',
          300: '#DCE4EE',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        wave: 'wave 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
