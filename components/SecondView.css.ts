import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  background: vars.color.accent,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 16,
});

export const heading = style({
  color: vars.color.background,
  fontSize: vars.fontSize.xl,
});
