import {
  createGlobalTheme,
  createTheme,
  globalStyle,
} from "@vanilla-extract/css";

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
    md: "1.25rem",
    lg: "1.875rem",
    xl: "3.75rem",
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
  fontFamily: vars.font.ui,
});
