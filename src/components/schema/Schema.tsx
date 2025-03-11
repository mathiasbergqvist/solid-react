import React, { useState, useEffect } from "react";
import styles from "./Schema.module.css";
import { Talk } from "../../models/Talk";
import { ScheduleDay } from "../../models/ScheduleDay";
import Button from "../../design-system/Button/Button";
import {
  ButtonIcon,
  ButtonType,
} from "../../design-system/Button/Button.enums";
import Input from "../../design-system/Input/Input";

const Schema = () => {
  const [schema, setSchema] = useState<Array<Talk>>([]);
  const [dayFilter, setDayFilter] = useState<ScheduleDay>(ScheduleDay.unset);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchSchema = () => {
    fetch("http://localhost:3232/talks")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSchema(data);
        }
      });
  };

  useEffect(() => {
    fetchSchema();
  }, []);

  if (schema.length === 0) {
    return null;
  }

  const handleSearchFilter = (searchTearm: string) => {
    setSearchTerm(searchTearm);
  };

  const handleDayFilter = (day: ScheduleDay) => {
    setDayFilter(day);
  };

  const filteredSchemaByDay: Array<Talk> = schema.filter((talk) => {
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
        const { title, speaker, date, description } = talk;
        return (
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <h3 className={styles.infoCardTitle}>{title}</h3>
              <span className={styles.infoCardDate}>{date}</span>
            </div>
            <p className={styles.infoCardDescription}>{description}</p>
            <div className={styles.infoCardFooter}>
              <span className={styles.infoCardAuthor}>Av {speaker}</span>
              <Button
                text="Läs Mer"
                buttonType={ButtonType.primary}
                icon={ButtonIcon.arrow}
                iconLabel="Emoji med en pil"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Schema;
