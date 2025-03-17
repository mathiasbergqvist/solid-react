import { useCallback, useEffect, useState } from "react";
import { Comment } from "../../../models/Comment";

const useComments = (sessionId: number) => {
  const API_URL = "http://localhost:3232";

  const [comments, setComments] = useState<Array<Comment>>([]);

  const fetchComments = useCallback(async () => {
    try {
      await fetch(`${API_URL}/comments?sessionId=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setComments(data);
          }
        });
    } catch (_) {
      console.error("Failed to fetch comments");
    }
  }, [sessionId]);

  const addComment = async (comment: string, sessionId: number) => {
    try {
      await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          comment,
        }),
      });
    } catch (_) {
      console.error("Failed to submit comment.");
    }
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return { comments, addComment };
};

export default useComments;
