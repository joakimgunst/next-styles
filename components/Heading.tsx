import styled from "@emotion/styled";
import { motion } from "framer-motion";

export default function Heading() {
  return (
    <StyledHeading
      animate={{ scale: 1.1 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    >
      Sustainable digital engineering
    </StyledHeading>
  );
}

const StyledHeading = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.display};
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.lg};
  text-align: center;

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;
