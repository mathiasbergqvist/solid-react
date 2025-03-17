import React from "react";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.enums";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  text: string;
  icon?: React.ReactNode;
  selected?: boolean;
}

const Button = ({
  text,
  buttonType,
  icon,
  selected,
  onClick,
  className,
  ...restProps
}: ButtonProps) => {
  const styling = `${styles.button} ${styles[buttonType]} ${
    selected && styles.selected
  } ${className}`;

  return (
    <button onClick={onClick} className={styling} {...restProps}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
