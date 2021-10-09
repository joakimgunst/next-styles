import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

globalFontFace("Reckless Neue", {
  src: 'url("/fonts/RecklessNeue-Regular.woff2")',
});

globalFontFace("Roobert", {
  src: 'url("/fonts/Roobert-Regular.woff2")',
});

export const vars = createGlobalTheme(":root", {
  color: {
    neroBlack: "#151515",
    rockBlack: "#26273A",
    neonBlue: "#6056EB",
    malibuBlue: "#6DC4E2",
    tuftBush: "#FFD1C1",
    cloudySky: "#ADA9A1",
  },
  font: {
    text: "Reckless Neue",
    ui: "Roobert",
  },
});

globalStyle("body", {
  margin: 0,
});
