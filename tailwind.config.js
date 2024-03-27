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
        primaryDark: '#F4F4F4',
        borderColor: '5B5B5B',
        mainBg: '#FFFFFF',
        mainBgDark: '#101111',
        brand: '#FF6700',
        secondary: '838282',
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
