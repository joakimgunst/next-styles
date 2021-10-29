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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
