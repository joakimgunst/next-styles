import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  background: vars.color.background,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 40,
});

const pulse = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)" },
});

export const text = style({
  fontFamily: vars.font.display,
  color: vars.color.accent,
  fontSize: vars.fontSize["3xl"],
  textAlign: "center",
  margin: 0,
  animation: `10s infinite ${pulse}`,
  transition: "all .2s ease",
  userSelect: "none",
  "@media": {
    "(min-width: 1024px)": {
      fontSize: vars.fontSize["6xl"],
    },
  },
});

export const buttons = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});
