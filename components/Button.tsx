import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./Button.css";

type ButtonVariant = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

export default function Button(props: Props) {
  const { variant, className, ...otherProps } = props;
  return <button className={buttonVariants[variant]} {...otherProps} />;
}
