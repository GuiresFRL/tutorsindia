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
          DEFAULT: '#c8102e',
          dark: '#a00c24',
          light: '#e8142f',
        },
        secondary: {
          DEFAULT: '#1a237e',
          dark: '#0d1257',
          light: '#283593',
        },
        accent: '#f5a623',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
