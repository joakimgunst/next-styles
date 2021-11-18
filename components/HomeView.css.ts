import { style } from "@vanilla-extract/css";
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

export const buttons = style({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const link = style({
  color: vars.color.text,
  ":hover": {
    textDecoration: "underline",
  },
});
