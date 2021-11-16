import React from "react";
import { motion } from "framer-motion";

export default function Heading() {
  return (
    <motion.h1
      className="text-lg select-none text-neonBlue lg:text-xl dark:text-malibuBlue font-display"
      animate={{ scale: 1.1 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    >
      Sustainable digital engineering
    </motion.h1>
  );
}
