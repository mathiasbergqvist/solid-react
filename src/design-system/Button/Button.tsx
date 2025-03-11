import React from "react";
import styles from "./Button.module.css";
import { ButtonIcon, ButtonType } from "./Button.enums";

interface HTMLButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  ...restProps
}: HTMLButtonProps) => {
  const className = `${styles.button} ${styles[buttonType]} ${
    selected && styles.selected
  }`;

  return (
    <button onClick={onClick} className={className} {...restProps}>
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
