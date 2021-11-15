import styles from "./Heading.module.css";
import { motion } from "framer-motion";

export default function Heading() {
  return (
    <motion.h1
      className={styles.heading}
      animate={{ scale: 1.1 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    >
      Sustainable digital engineering
    </motion.h1>
  );
}
