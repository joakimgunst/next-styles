import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

export default function Button({ variant, ...otherProps }: Props) {
  return (
    <button
      className={classNames(styles.button, styles[variant])}
      {...otherProps}
    />
  );
}
