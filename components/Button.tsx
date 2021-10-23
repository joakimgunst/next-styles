import { styled, theme } from "../stitches.config";

const Button = styled("button", {
  fontFamily: theme.fonts.ui,
  fontSize: "1.5rem",
  textAlign: "center",
  padding: "8px 16px",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: theme.colors.text,
  borderRadius: 8,
  transition: "all .2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  variants: {
    variant: {
      primary: {
        background: theme.colors.text,
        color: theme.colors.background,
      },
      secondary: {
        background: theme.colors.background,
        color: theme.colors.text,
      },
    },
  },
});

export default Button;
