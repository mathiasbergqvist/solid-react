import { useEffect } from "react";
import FreeTextForm from "../../design-system/FreeTextForm/FreeTextForm";
import styles from "./Comments.module.css";
import CommentsList from "./components/CommentsList/CommentsList";
import useComments from "./hooks/useComments";

type CommentsProps = {
  sessionId: number;
};

const Comments = ({ sessionId }: CommentsProps) => {
  const { comments, addComment } = useComments(sessionId);

  return (
    <div className={styles.commentsForm}>
      <FreeTextForm onSubmit={(comment) => addComment(comment, sessionId)} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default Comments;
