import { motion } from "framer-motion";
import css from "styled-jsx/css";

export default function Heading() {
  const { className, styles } = css.resolve`
    h1 {
      font-family: var(--font-display);
      color: var(--color-accent);
      font-size: var(--font-size-lg);
      text-align: center;
    }

    @media (min-width: 1024px) {
      h1 {
        font-size: var(--font-size-xl);
      }
    }
  `;

  return (
    <motion.h1
      className={className}
      animate={{ scale: 1.1 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    >
      Sustainable digital engineering
      {styles}
    </motion.h1>
  );
}
