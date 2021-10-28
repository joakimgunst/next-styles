import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

const buttonBase = style({
  fontFamily: vars.font.ui,
  fontSize: "1.25rem",
  textAlign: "center",
  padding: "8px 16px",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: vars.color.text,
  borderRadius: 2,
  transition: "all .2s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const buttonVariants = styleVariants({
  primary: [
    buttonBase,
    {
      background: vars.color.text,
      color: vars.color.background,
    },
  ],
  secondary: [
    buttonBase,
    {
      background: vars.color.background,
      color: vars.color.text,
    },
  ],
});
