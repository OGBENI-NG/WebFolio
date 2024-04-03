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
        primary: '#1C4243',
        primaryDark: '#F4F4F4',
        borderColor: '#E0DDDD',
        mainBg: '#F3F3F3',
        mainBgDark: '#101111',
        brand: '#0B5AF1',
        secondary: '#838282',
        secondaryDark: '#BCBABA'
      }
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }
  },
  plugins: [],
}
