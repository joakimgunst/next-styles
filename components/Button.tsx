import { styled } from "linaria/react";

type ButtonVariant = "primary" | "secondary";

interface Props {
  variant: ButtonVariant;
}

const Button = styled.button<Props>`
  font-family: var(--font-ui);
  font-size: var(--font-size-md);
  text-align: center;
  padding: 8px 16px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--color-text);
  border-radius: 2px;
  transition: all 0.2s ease;
  background: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "var(--color-text)";
      case "secondary":
        return "var(--color-background)";
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "var(--color-background)";
      case "secondary":
        return "var(--color-text)";
    }
  }};
  &:hover {
    transform: scale(1.05);
  }
`;

export default Button;
