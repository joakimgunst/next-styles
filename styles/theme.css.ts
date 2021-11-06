import {
  createGlobalTheme,
  createTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

globalFontFace("Reckless Neue", {
  fontWeight: "bold",
  src: 'url("/fonts/RecklessNeue-Bold.woff2")',
});

globalFontFace("Roobert", {
  src: 'url("/fonts/Roobert-Regular.woff2")',
});

const colors = {
  rockBlack: "#26273A",
  neonBlue: "#6056EB",
  malibuBlue: "#6DC4E2",
  pureWhite: "#FFFFFF",
};

const theme = {
  color: {
    background: colors.pureWhite,
    text: colors.rockBlack,
    accent: colors.neonBlue,
  },
  font: {
    display: "Reckless Neue",
    ui: "Roobert",
  },
  fontSize: {
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
};

export const vars = createGlobalTheme(":root", theme);

export const darkMode = createTheme(vars, {
  ...theme,
  color: {
    background: colors.rockBlack,
    text: colors.pureWhite,
    accent: colors.malibuBlue,
  },
});

globalStyle("body", {
  margin: 0,
});
