import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import { styled } from "@stitches/react";

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
  ...tw`text-lg select-none text-neonBlue lg:text-xl dark:text-malibuBlue font-display`,
});
