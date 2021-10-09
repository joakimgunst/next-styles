import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

const buttonBase = style({
  fontFamily: vars.font.ui,
  fontSize: "1.5rem",
  textAlign: "center",
  padding: "8px 16px",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: vars.color.neonBlue,
  borderRadius: 8,
  transition: "all .2s ease",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const buttonVariants = styleVariants({
  primary: [buttonBase, { background: vars.color.neonBlue, color: "white" }],
  secondary: [buttonBase, { background: "white", color: vars.color.neonBlue }],
});
