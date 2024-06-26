// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSan: ["Open Sans", "sans-serif"],
        Solway: ["Solway", "serif"],
      },
      screens: {
        'xl': {'min': '1200px', 'max': '1280px'},
        'xxl': {'min': '1290px', 'max': '1536px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
      colors: {
        brand: "#2b7f4f",
        brandDark: "#06C156",
        darkest: "#020202",
        dark: "#37476C",
        mid: "#03012C",
        light: "#E6ECF3",
        lightest: "#FFFFFF",
        bodyBg: "#F5F5F5"
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease 0s 1 normal forwards",
        fadeOutUp: "fadeOutUp 1s ease 0s 1 normal forwards",
        fadeInLeft: "fadeInLeft 1s ease 0s 1 normal forwards",
        fadeInTop: "fadeInTop 1s ease 0s 1 normal forwards",
        fadeInClose: "fadeInClose 1s ease 0s 1 normal forwards",
        loading: "loading 2s linear infinite",
        pulse: 'pulse .5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: 0,
            transform: "translate3d(0, -25px, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeOutUp: {
          from: {
            opacity: 0,
            transform: "translateY(25px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          from: {
            transform: "translateX(-25px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        fadeInTop: {
          from: {
            transform: "translateX(25px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        fadeInClose: {
          from: {
            transform: "translateY(25px)",
          },
          to: {
            transform: "translateY(0)",
            opacity: 0,
          },
        },
        loading: {
          "0%": {
            opacity: 0.5,
            width: "60px", // Initial width
            height: "auto",
            transform: "rotate(1800deg)", // Initial rotation
          },
          "25%": {
            opacity: 0.8,
            width: "20px", // Intermediate width
            height: "auto",
            transform: "rotate(360deg)", // Intermediate rotation
          },
          "50%": {
            opacity: 1,
            width: "60px", // Intermediate width
            height: "auto",
            transform: "rotate(190deg)", // Intermediate rotation
          },
          "75%": {
            opacity: 0.8,
            width: "20px", // Intermediate width
            height: "auto",
            transform: "rotate(270deg)", // Intermediate rotation
          },
          "85%": {
            opacity: 0.5,
            width: "60px", // Final width (same as initial)
            height: "auto",
            transform: "rotate(360deg)", // Final rotation (360 degrees)
          },
          "100%": {
            opacity: 0.5,
            width: "20px", // Final width (same as initial)
            height: "auto",
            transform: "rotate(1800deg)", // Final rotation (360 degrees)
          },
        },
        purse: {
          "0%" :{
           opacity: .8,
          },
          "50%": {
            opacity: 0.5
          },
          "100%" : {
            opacity: 1
          }
        }
      },
      
    },
  },
  plugins: [],
};