import { styled } from "../stitches.config";

const Button = styled("button", {
  fontSize: "$md",
  textAlign: "center",
  padding: "8px 16px",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "$text",
  borderRadius: 2,
  transition: "transform .2s ease",
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
