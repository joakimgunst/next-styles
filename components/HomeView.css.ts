import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 24,
});

const pulse = keyframes({
  "0%": { color: vars.color.neonBlue },
  "33%": { color: vars.color.malibuBlue },
  "66%": { color: vars.color.tuftBush },
  "100%": { color: vars.color.neonBlue },
});

export const text = style({
  fontFamily: vars.font.text,
  fontSize: "2rem",
  textAlign: "center",
  margin: 0,
  animation: `10s infinite ${pulse}`,
  transition: "all .2s ease",
  userSelect: "none",
  ":hover": {
    transform: "scale(1.1)",
  },
  "@media": {
    "(min-width: 1024px)": {
      fontSize: "4rem",
    },
  },
});

export const buttons = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});
