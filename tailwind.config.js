/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e6edff',
          200: '#c2d4ff',
          300: '#9ebdff',
          400: '#7a9dff',
          500: '#5577dd',
          600: '#4461cc',
          700: '#334cbb',
          800: '#2237aa',
          900: '#112299',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
