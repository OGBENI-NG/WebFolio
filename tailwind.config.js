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
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
        fadeOut: 'fadeOutUp 0.5s ease-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)'
          },
        },
      },
    },
  },
  plugins: [],
};
