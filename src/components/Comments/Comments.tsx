import React, { useEffect, useState } from "react";
import CommentsList from "./components/CommentsList/CommentsList";
import { Comment } from "../../models/Comment";
import styles from "./Comments.module.css";
import FreeTextForm from "../../design-system/FreeTextForm/FreeTextForm";

type CommentsProps = {
  talkId: number;
};

const Comments = ({ talkId: taskId }: CommentsProps) => {
  const [comments, setComments] = useState<Array<Comment>>([]);

  const fetchComments = async () => {
    try {
      await fetch(`http://localhost:3232/comments?talkId=${taskId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setComments(data);
          }
        });
    } catch (_) {
      console.error("Failed to fetch comments");
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className={styles.commentsForm}>
      <FreeTextForm talkId={taskId} onCommentAdded={() => fetchComments()} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default Comments;
