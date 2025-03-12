import React, { useState } from "react";
import styles from "./FreeTextForm.module.css";
import Button from "../Button/Button";
import { ButtonType } from "../Button/Button.enums";

type FreeTextFormProps = {
  talkId: number;
  onCommentAdded: () => void;
};

const FreeTextForm = ({ talkId, onCommentAdded }: FreeTextFormProps) => {
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      try {
        await fetch("http://localhost:3232/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            talkId,
            comment,
          }),
        });
        setComment("");
        onCommentAdded();
      } catch (_) {
        console.error("Failed to submit comment:");
      }
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
