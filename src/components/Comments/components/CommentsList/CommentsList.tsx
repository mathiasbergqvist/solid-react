import React from "react";
import styles from "./CommentsList.module.css";
import { Comment } from "../../../../models/Comment";

type CommentsListProps = {
  comments: Array<Comment>;
};

const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <div className={styles.commentsList}>
      <h3>Kommentarer</h3>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <p className={styles.commentText}>{`"${comment.comment}"`}</p>
          </div>
        ))
      ) : (
        <p className={styles.noComments}>Inga kommentarer än.</p>
      )}
    </div>
  );
};

export default CommentsList;
