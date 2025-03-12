import React, { useState } from "react";
import styles from "./Schema.module.css";
import { Talk } from "../../models/Talk";
import { ScheduleDay } from "../../models/ScheduleDay";
import Button from "../../design-system/Button/Button";
import {
  ButtonIcon,
  ButtonType,
} from "../../design-system/Button/Button.enums";
import Input from "../../design-system/Input/Input";
import SpeechBubble from "../SpeechBubble/SpeechBubble";
import Comments from "../Comments/Comments";

type SchemaProps = {
  talks: Array<Talk>;
};

const Schema = ({ talks }: SchemaProps) => {
  const [dayFilter, setDayFilter] = useState<ScheduleDay>(ScheduleDay.unset);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayComments, setDisplayComments] = useState<Array<number>>([]);

  const handleSearchFilter = (searchTearm: string) => {
    setSearchTerm(searchTearm);
  };

  const handleDayFilter = (day: ScheduleDay) => {
    setDayFilter(day);
  };

  const handleShowComments = (id: number) => {
    setDisplayComments((prevState) => [...prevState, id]);
  };

  const shouldDisplayComments = (id: number) => {
    return displayComments.includes(id);
  };

  const filteredSchemaByDay: Array<Talk> = talks.filter((talk) => {
    if (dayFilter === ScheduleDay.unset) {
      return true;
    }
    if (dayFilter === ScheduleDay.friday) {
      return talk.date.includes("2023-03-21");
    }
    if (dayFilter === ScheduleDay.saturday) {
      return talk.date.includes("2023-03-22");
    }
  });

  const filteredSchemaBySearch: Array<Talk> = filteredSchemaByDay.filter(
    (talk) => {
      return talk.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  );

  return (
    <>
      <Input
        placeholder="Sök efter pass"
        value={searchTerm}
        onChange={handleSearchFilter}
      />
      <div className={styles.buttonGroup}>
        Välj dag:
        <Button
          text="Alla dagar"
          buttonType={ButtonType.secondary}
          icon={ButtonIcon.hand}
          iconLabel="Emoji med öppna händer"
          onClick={() => handleDayFilter(ScheduleDay.unset)}
          selected={dayFilter === ScheduleDay.unset}
        />
        <Button
          text="2023-03-21"
          buttonType={ButtonType.secondary}
          icon={ButtonIcon.one_finger}
          iconLabel="Emoji med en hand som sträcker upp ett finger"
          onClick={() => handleDayFilter(ScheduleDay.friday)}
          selected={dayFilter === ScheduleDay.friday}
        />
        <Button
          text="2023-03-22"
          buttonType={ButtonType.secondary}
          icon={ButtonIcon.two_fingers}
          iconLabel="Emoji med en hand som sträcker upp två fingrar"
          onClick={() => handleDayFilter(ScheduleDay.saturday)}
          selected={dayFilter === ScheduleDay.saturday}
        />
      </div>
      {filteredSchemaBySearch.map((talk) => {
        const { title, speaker, date } = talk;
        return (
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <h3 className={styles.infoCardTitle}>{title}</h3>
              <span className={styles.infoCardDate}>{date}</span>
            </div>
            <SpeechBubble talk={talk} />
            <div className={styles.infoCardFooter}>
              <span className={styles.infoCardAuthor}>Av {speaker}</span>
              <Button
                text="Visa Kommentarer"
                buttonType={ButtonType.primary}
                icon={ButtonIcon.arrow}
                iconLabel="Emoji med en pil"
                onClick={(_) => handleShowComments(talk.id)}
              />
            </div>
            {shouldDisplayComments(talk.id) && <Comments talkId={talk.id} />}
          </div>
        );
      })}
    </>
  );
};

export default Schema;
