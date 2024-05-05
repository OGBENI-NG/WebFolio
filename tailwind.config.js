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
      colors: {
        brand: "#38bdf8",
        darkest: "#0F172A",
        dark: "#37476C",
        mid: "#CBD5E1",
        light: "#E6ECF3",
        lightest: "#FFFFFF",
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease 0s 1 normal forwards",
        fadeOutUp: "fadeOutUp 1s ease 0s 1 normal forwards",
        fadeInLeft: "fadeInLeft 1s ease 0s 1 normal forwards",
        fadeInTop: "fadeInTop 1s ease 0s 1 normal forwards",
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
        
      },
    },
  },
  plugins: [],
};
