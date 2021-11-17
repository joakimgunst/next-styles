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
    fontSize: {
      md: "1.25rem",
      lg: "1.875rem",
      xl: "3.75rem",
    },
  },
};
