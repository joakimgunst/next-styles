import { ButtonHTMLAttributes } from "react";
import { button, ButtonVariants } from "./Button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export default function Button({ variant, ...otherProps }: Props) {
  return <button className={button({ variant })} {...otherProps} />;
}
