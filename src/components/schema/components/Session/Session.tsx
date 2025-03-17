import React from "react";
import Button from "../../../../design-system/Button/Button";
import { ButtonType } from "../../../../design-system/Button/Button.enums";
import Icon from "../../../../design-system/Icon/Icon";
import { IconType } from "../../../../design-system/Icon/Icon.enums";
import { Session as SessionModel } from "../../../../models/Session";
import Comments from "../../../Comments/Comments";
import SpeechBubble from "../../../SpeechBubble/SpeechBubble";
import styles from "./Session.module.css";

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
          onClick={(_) => setDisplayComments(!displayComments)}
          icon={<Icon icon={IconType.arrow} iconLabel="Emoji med en pil" />}
        />
      </div>
      {displayComments && <Comments sessionId={id} />}
    </div>
  );
};

export default Session;
