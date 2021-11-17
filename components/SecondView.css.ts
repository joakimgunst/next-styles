import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const container = style({
  background: vars.color.accent,
  color: vars.color.background,
  fontSize: vars.fontSize.lg,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
