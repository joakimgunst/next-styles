import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

export const heading = style({
  fontFamily: vars.font.display,
  color: vars.color.accent,
  fontSize: vars.fontSize.lg,
  textAlign: "center",
  "@media": {
    "(min-width: 1024px)": {
      fontSize: vars.fontSize.xl,
    },
  },
});
