import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../styles/theme.css";

export const button = recipe({
  base: {
    fontFamily: vars.font.ui,
    fontSize: vars.fontSize.md,
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
  },

  variants: {
    variant: {
      primary: {
        background: vars.color.text,
        color: vars.color.background,
      },
      secondary: {
        background: vars.color.background,
        color: vars.color.text,
      },
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
