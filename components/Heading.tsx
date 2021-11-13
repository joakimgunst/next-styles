import React from "react";
import { styled, theme } from "../stitches.config";
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

const StyledHeading = styled(motion.h1, {
  fontFamily: theme.fonts.display,
  color: theme.colors.accent,
  fontSize: theme.fontSizes.lg,
  textAlign: "center",
  "@desktop": {
    fontSize: theme.fontSizes.xl,
  },
});
