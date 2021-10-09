import {
  createGlobalTheme,
  createTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

globalFontFace("Reckless Neue", {
  src: 'url("/fonts/RecklessNeue-Regular.woff2")',
});

globalFontFace("Roobert", {
  src: 'url("/fonts/Roobert-Regular.woff2")',
});

const colors = {
  rockBlack: "#26273A",
  neonBlue: "#6056EB",
  malibuBlue: "#6DC4E2",
  tuftBush: "#FFD1C1",
  cloudySky: "#ADA9A1",
  pureWhite: "#FFFFFF",
};

export const vars = createGlobalTheme(":root", {
  color: {
    background: colors.pureWhite,
    text: colors.rockBlack,
    accent: colors.neonBlue,
  },
  font: {
    text: "Reckless Neue",
    ui: "Roobert",
  },
});

export const darkMode = createTheme(vars, {
  color: {
    background: colors.rockBlack,
    text: colors.pureWhite,
    accent: colors.malibuBlue,
  },
  font: {
    text: "Reckless Neue",
    ui: "Roobert",
  },
});

globalStyle("body", {
  margin: 0,
});
