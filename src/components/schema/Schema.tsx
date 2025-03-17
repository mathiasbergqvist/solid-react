import Input from "../../design-system/Input/Input";
import { Session as SessionModel } from "../../models/Session";
import DateFilter from "./components/DateFilter/DateFilter";
import Session from "./components/Session/Session";
import useDateFilter from "./hooks/useDateFilter";
import useSearch from "./hooks/useSearch";

type SchemaProps = {
  sessions: Array<SessionModel>;
};

const Schema = ({ sessions }: SchemaProps) => {
  const { handleDayFilter, filterSchemaByDay, dayFilter } = useDateFilter();
  const { searchTerm, handleSearchFilter, filterSchemaBySearch } = useSearch();

  const filteredSessions: Array<SessionModel> = filterSchemaBySearch(
    filterSchemaByDay(sessions)
  );

  return (
    <>
      <Input
        placeholder="Sök efter pass"
        value={searchTerm}
        onChange={handleSearchFilter}
      />
      <DateFilter handleDayFilter={handleDayFilter} currentFilter={dayFilter} />
      {filteredSessions.map((session: SessionModel) => (
        <Session key={session.id} session={session} />
      ))}
    </>
  );
};

export default Schema;
