import { createStitches, createTheme, globalCss } from "@stitches/react";

const colors = {
  rockBlack: "#26273A",
  neonBlue: "#6056EB",
  malibuBlue: "#6DC4E2",
  tuftBush: "#FFD1C1",
  cloudySky: "#ADA9A1",
  pureWhite: "#FFFFFF",
};

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    fonts: {
      text: "Reckless Neue",
      ui: "Roobert",
    },
    colors: {
      background: colors.pureWhite,
      text: colors.rockBlack,
      accent: colors.neonBlue,
    },
  },
  media: {
    desktop: "(min-width: 1024px)",
  },
});

export const darkTheme = createTheme({
  colors: {
    background: colors.rockBlack,
    text: colors.pureWhite,
    accent: colors.malibuBlue,
  },
});

export const globalStyles = globalCss({
  body: { margin: 0 },
  "@font-face": [
    {
      fontFamily: "Reckless Neue",
      src: 'url("/fonts/RecklessNeue-Regular.woff2")',
    },
    {
      fontFamily: "Roobert",
      src: 'url("/fonts/Roobert-Regular.woff2")',
    },
  ],
});
