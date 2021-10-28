import { styled } from "../stitches.config";

const Button = styled("button", {
  fontFamily: "$ui",
  fontSize: "1.5rem",
  textAlign: "center",
  padding: "8px 16px",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "$text",
  borderRadius: 8,
  transition: "all .2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  variants: {
    variant: {
      primary: {
        background: "$text",
        color: "$background",
      },
      secondary: {
        background: "$background",
        color: "$text",
      },
    },
  },
});

export default Button;
