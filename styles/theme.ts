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
    md: "1.25rem",
    lg: "1.875rem",
    xl: "3.75rem",
  },
};

export const darkTheme: Theme = {
  ...theme,
  colors: {
    background: colors.rockBlack,
    text: colors.pureWhite,
    accent: colors.malibuBlue,
  },
};
