import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

export default function Button(props: Props) {
  const { variant, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(
        "py-2 px-4 rounded-sm border-2 text-xl border-rockBlack dark:border-pureWhite hover:scale-105 transition",
        variant === "primary" &&
          "bg-rockBlack text-pureWhite dark:bg-pureWhite dark:text-rockBlack",
        variant === "secondary" &&
          "bg-pureWhite text-rockBlack dark:bg-rockBlack dark:text-pureWhite"
      )}
    />
  );
}
