import React, { useState, useEffect } from "react";
import styles from "./Schema.module.css";
import { Talk } from "../../models/Talk";
import { ScheduleDay } from "../../models/ScheduleDay";

const Schema = () => {
  const [schema, setSchema] = useState<Array<Talk>>([]);
  const [dayFilter, setDayFilter] = useState<ScheduleDay>(ScheduleDay.unset);

  const fetchSchema = () => {
    fetch("http://localhost:3232/talks")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSchema(data);
        }
      });
  };

  const handleFilter = (day: ScheduleDay) => {
    setDayFilter(day);
  };

  const filteredSchema = schema.filter((talk) => {
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

  useEffect(() => {
    fetchSchema();
  }, []);

  if (schema.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.buttonGroup}>
        Välj dag:
        <button
          onClick={() => handleFilter(ScheduleDay.unset)}
          className={`${styles.filterButton} ${
            dayFilter === ScheduleDay.unset && styles.filterButtonSelected
          }`}
        >
          Alla dagar
        </button>
        <button
          onClick={() => handleFilter(ScheduleDay.friday)}
          className={`${styles.filterButton} ${
            dayFilter === ScheduleDay.friday && styles.filterButtonSelected
          }`}
        >
          2023-03-21
        </button>
        <button
          onClick={() => handleFilter(ScheduleDay.saturday)}
          className={`${styles.filterButton} ${
            dayFilter === ScheduleDay.saturday && styles.filterButtonSelected
          }`}
        >
          2023-03-22
        </button>
      </div>
      {filteredSchema.map((talk) => {
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
              <button className={styles.infoCardButton}>Läs Mer</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Schema;
