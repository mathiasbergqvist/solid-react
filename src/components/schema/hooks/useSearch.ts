import { useState, useCallback } from "react";
import { Session } from "../../../models/Session";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchFilter = (searchTearm: string) => {
    setSearchTerm(searchTearm);
  };

  const filterSchemaBySearch = useCallback(
    (sessions: Array<Session>): Array<Session> =>
      sessions.filter((session) =>
        session.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return { searchTerm, handleSearchFilter, filterSchemaBySearch };
};

export default useSearch;
