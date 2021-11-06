const colors = {
  rockBlack: "#26273A",
  neonBlue: "#6056EB",
  malibuBlue: "#6DC4E2",
  pureWhite: "#FFFFFF",
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      rockBlack: "#26273A",
      neonBlue: "#6056EB",
      malibuBlue: "#6DC4E2",
      pureWhite: "#FFFFFF",
    },
    fontFamily: {
      display: "Reckless Neue",
      ui: "Roobert",
    },
    extend: {
      animation: {
        "size-pulse": "10s infinite size-pulse",
      },
      keyframes: {
        "size-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
