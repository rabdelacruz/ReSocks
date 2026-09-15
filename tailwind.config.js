/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf9ec',
          100: '#faf0cf',
          200: '#f4dfa0',
          300: '#edc96a',
          400: '#e3b13e',
          500: '#d4a017',
          600: '#b8860b',
          700: '#8f6a08',
          800: '#6b4f06',
          900: '#493604',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
