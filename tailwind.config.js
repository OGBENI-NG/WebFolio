/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSan: ['Open Sans', 'sans-serif'],
        Solway: ['Solway', 'serif'],
      },
      colors: {
        primary: '#045658',
        borderColor: '#D9D9D9',
        mainBg: '#F4F9F9',
        brand: '#EF6101',
        secondary: '#8A8686'
      }
    },
  },
  plugins: [],
}
