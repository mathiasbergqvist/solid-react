import React from "react";
import styles from "./Input.module.css";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const Input = ({ value, onChange, placeholder }: Props) => (
  <div className={styles.inputContainer}>
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default Input;
