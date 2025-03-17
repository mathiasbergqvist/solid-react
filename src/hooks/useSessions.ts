import { useEffect, useState } from "react";
import { Session } from "../models/Session";

const useSessions = () => {
  const [sessions, setSessions] = useState<Array<Session>>([]);

  const fetchSchema = async () => {
    try {
      await fetch("http://localhost:3232/sessions")
        .then((res) => res.json())
        .then((data: Array<Session>) => {
          if (data) {
            setSessions(data);
          }
        });
    } catch (_) {
      console.error("Failed to fetch talks");
    }
  };

  useEffect(() => {
    fetchSchema();
  }, []);

  return { sessions };
};

export default useSessions;
