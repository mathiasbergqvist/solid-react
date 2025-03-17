import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleInputChange: (value: string) => void;
}

const Input = ({ handleInputChange, className, ...restProps }: InputProps) => (
  <div className={styles.inputContainer}>
    <input
      className={`${styles.input} ${className}`}
      onChange={(e) => handleInputChange(e.target.value)}
      {...restProps}
    />
  </div>
);

export default Input;
