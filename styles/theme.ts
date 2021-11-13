import { Theme } from "@emotion/react";

const colors = {
  rockBlack: "#26273A",
  neonBlue: "#6056EB",
  malibuBlue: "#6DC4E2",
  pureWhite: "#FFFFFF",
};

export const theme: Theme = {
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
    xl: "1.25rem",
    "3xl": "1.875rem",
    "6xl": "3.75rem",
  },
};
