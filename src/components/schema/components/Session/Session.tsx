import React from "react";
import SpeechBubble from "../../../SpeechBubble/SpeechBubble";
import Button from "../../../../design-system/Button/Button";
import styles from "./Session.module.css";
import Comments from "../../../Comments/Comments";
import {
  ButtonIcon,
  ButtonType,
} from "../../../../design-system/Button/Button.enums";
import { Session as SessionModel } from "../../../../models/Session";

type SessionProps = {
  session: SessionModel;
};

const Session = ({ session }: SessionProps) => {
  const { id, title, speaker, date, description } = session;
  const [displayComments, setDisplayComments] = React.useState<boolean>(false);
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardHeader}>
        <h3 className={styles.infoCardTitle}>{title}</h3>
        <span className={styles.infoCardDate}>{date}</span>
      </div>
      <SpeechBubble text={description} />
      <div className={styles.infoCardFooter}>
        <span className={styles.infoCardAuthor}>Av {speaker}</span>
        <Button
          text="Visa Kommentarer"
          buttonType={ButtonType.primary}
          icon={ButtonIcon.arrow}
          iconLabel="Emoji med en pil"
          onClick={(_) => setDisplayComments(!displayComments)}
        />
      </div>
      {displayComments && <Comments talkId={id} />}
    </div>
  );
};

export default Session;
