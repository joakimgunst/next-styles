import { createStitches, createTheme, globalCss } from "@stitches/react";

const colors = {
  rockBlack: "#26273A",
  neonBlue: "#6056EB",
  malibuBlue: "#6DC4E2",
  pureWhite: "#FFFFFF",
};

export const { styled, getCssText, keyframes, theme } = createStitches({
  theme: {
    fonts: {
      display: "Reckless Neue",
      ui: "Roobert",
    },
    colors: {
      background: colors.pureWhite,
      text: colors.rockBlack,
      accent: colors.neonBlue,
    },
    space: {
      2: "0.5rem",
      4: "1rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
    },
    fontSizes: {
      md: "1.25rem",
      lg: "1.875rem",
      xl: "3.75rem",
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
  h1: { margin: 0 },
  "@font-face": [
    {
      fontFamily: "Reckless Neue",
      fontWeight: "bold",
      src: 'url("/fonts/RecklessNeue-Bold.woff2")',
    },
    {
      fontFamily: "Roobert",
      src: 'url("/fonts/Roobert-Regular.woff2")',
    },
  ],
});
