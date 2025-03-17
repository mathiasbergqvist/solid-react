import styles from "./SpeechBubble.module.css";

type Props = {
  text: string;
};

const SpeechBubble = ({ text }: Props) => (
  <div className={styles.bubbleContainer}>
    <div className={styles.bubble}>
      <p className={styles.text}>{text}</p>
      <div className={styles.tail}></div>
    </div>
  </div>
);

export default SpeechBubble;
