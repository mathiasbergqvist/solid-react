import React from "react";
import styles from "./SpeechBubble.module.css";
import { Talk } from "../../models/Talk";

type Props = {
  talk: Talk;
};

const SpeechBubble = ({ talk }: Props) => (
  <div className={styles.bubbleContainer}>
    <div className={styles.bubble}>
      <p className={styles.text}>{talk.description}</p>
      <div className={styles.tail}></div>
    </div>
  </div>
);

export default SpeechBubble;
