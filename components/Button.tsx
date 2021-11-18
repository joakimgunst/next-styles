import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
};

export default function Button(props: Props) {
  const { variant, className, children, ...otherProps } = props;
  return (
    <button
      className={classNames("button", "button-" + variant, className)}
      {...otherProps}
    >
      {children}
      <style jsx>{`
        .button {
          font-family: var(--font-ui);
          font-size: var(--font-size-md);
          text-align: center;
          padding: 8px 16px;
          border-width: 2px;
          border-style: solid;
          border-color: var(--color-text);
          border-radius: 2px;
          transition: transform 0.2s ease;
        }

        .button:hover {
          transform: scale(1.05);
        }

        .button-primary {
          background: var(--color-text);
          color: var(--color-background);
        }

        .button-secondary {
          background: var(--color-background);
          color: var(--color-text);
        }
      `}</style>
    </button>
  );
}
