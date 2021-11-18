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
  body: { fontFamily: theme.fonts.ui },
});
