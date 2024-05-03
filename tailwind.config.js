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
        fadeInDown: "fadeInDown .5s ease 0s 1 normal forwards",
        fadeOutUp: "fadeOutUp .5s ease 0s 1 normal forwards",
        fadeClose: "fadeClose .5s ease 0s 1 normal forwards",
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: 0,
            transform: "translate3d(0, -40px, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeOutUp: {
          from: {
            opacity: 0,
            transform: "translateY(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeClose: {
          from: {
            opacity: 1,
            transform: "translateY(0)",
          },
          "50%": {
            height: "100%", // Transition to 50% height at 50% of the animation duration
            opacity: 0,
            transform: "translateY(-20px)"
          },
          to: {
            opacity: 0,
            transform: "translateY(-40px)", // Adjust as needed
            display: "none",
            height: "0px",
          },
        },
        
        
      },
    },
  },
  plugins: [],
};
