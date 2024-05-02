// tailwind.config.js

module.exports = {
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
        fadeInDown: "fadeInDown .4s both",
        fadeOutUp: "fadeOutUp .4s both",
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: 0,
            transform: "translate3d(0, -20%, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeOutUp: {
          from: {
            opacity: 1,
            transform: "translateY(0)",
          },
          to: {
            opacity: 1,
            transform: "translateY(-100%)",
          },
        },
        
      },
    },
  },
  plugins: [],
};
