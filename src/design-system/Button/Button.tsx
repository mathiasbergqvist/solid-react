import React from "react";
import styles from "./Button.module.css";
import { ButtonIcon, ButtonType } from "./Button.enums";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  text: string;
  icon?: ButtonIcon;
  iconLabel?: string;
  selected?: boolean;
}

const Button = ({
  text,
  buttonType,
  icon,
  iconLabel,
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
      <div className={styles.iconContainer}>
        {icon === ButtonIcon.hand && (
          <span role="img" aria-label={iconLabel}>
            👐
          </span>
        )}
        {icon === ButtonIcon.one_finger && (
          <span role="img" aria-label={iconLabel}>
            ☝️
          </span>
        )}
        {icon === ButtonIcon.two_fingers && (
          <span role="img" aria-label={iconLabel}>
            ✌️
          </span>
        )}
        {icon === ButtonIcon.arrow && (
          <span role="img" aria-label={iconLabel}>
            ➡️
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;
