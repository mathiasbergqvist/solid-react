import React from "react";
import styles from "./Icon.module.css";
import { IconType } from "./Icon.enums";

type IconProps = {
  icon: IconType;
  iconLabel: string;
};

const Icon = ({ icon, iconLabel }: IconProps) => (
  <div className={styles.iconContainer}>
    <span role="img" aria-label={iconLabel}>
      {icon}
    </span>
  </div>
);

export default Icon;
