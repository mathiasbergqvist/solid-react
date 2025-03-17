import React, { useState } from "react";
import styles from "./FreeTextForm.module.css";
import Button from "../Button/Button";
import { ButtonType } from "../Button/Button.enums";

type FreeTextFormProps = {
  onSubmit: (comment: string) => void;
};

const FreeTextForm = ({ onSubmit }: FreeTextFormProps) => {
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form className={styles.commentsForm} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        placeholder="Kommentera"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        type="submit"
        text="Kommentera"
        buttonType={ButtonType.secondary}
      />
    </form>
  );
};

export default FreeTextForm;
