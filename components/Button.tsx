import styled from "@emotion/styled";

type ButtonVariant = "primary" | "secondary";

interface Props {
  variant: ButtonVariant;
}

const Button = styled.button<Props>`
  font-family: ${(props) => props.theme.fonts.ui};
  font-size: ${(props) => props.theme.fontSizes.xl};
  text-align: center;
  padding: 8px 16px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.text};
  border-radius: 2px;
  transition: all 0.2s ease;
  background: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.colors.text;
      case "secondary":
        return props.theme.colors.background;
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.colors.background;
      case "secondary":
        return props.theme.colors.text;
    }
  }};

  &:hover {
    transform: scale(1.05);
  }
`;

export default Button;
