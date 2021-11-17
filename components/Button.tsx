import clsx from "clsx";
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
      className={clsx(
        "py-2 px-4 rounded-sm border-2 text-md border-rockBlack dark:border-pureWhite hover:scale-105 transition font-ui",
        variant === "primary" &&
          "bg-rockBlack text-pureWhite dark:(bg-pureWhite text-rockBlack)",
        variant === "secondary" &&
          "bg-pureWhite text-rockBlack dark:(bg-rockBlack text-pureWhite)"
      )}
    />
  );
}
