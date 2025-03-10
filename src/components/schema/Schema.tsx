import React, { useState, useEffect } from "react";
import styles from "./Schema.module.css";
import { Talk } from "../../models/Talk";

const Schema = () => {
  const [schema, setSchema] = useState<Array<Talk>>([]);

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

  return (
    <>
      {schema.map((talk) => {
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
