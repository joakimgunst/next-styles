import { styled } from "linaria/react";
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
  font-family: var(--font-display);
  color: var(--color-accent);
  font-size: var(--font-size-lg);
  text-align: center;

  @media (min-width: 1024px) {
    font-size: var(--font-size-xl);
  }
`;
