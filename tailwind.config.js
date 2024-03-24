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
        primaryDark: '#03C2C7',
        borderColor: 'D7D5D5',
        mainBg: '#FFFFFF',
        mainBgDark: '#101111',
        brand: '#EF6101',
        secondary: '#8A8686',
        secondaryDark: '#EEEEEE'
      }
    },
  },
  plugins: [],
}
