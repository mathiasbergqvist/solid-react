import { useCallback, useState } from "react";
import { ScheduleDay } from "../../../models/ScheduleDay";
import { Session } from "../../../models/Session";

const useDateFilter = () => {
  const [dayFilter, setDayFilter] = useState<ScheduleDay>(ScheduleDay.unset);

  const handleDayFilter = (day: ScheduleDay) => {
    setDayFilter(day);
  };

  const filterSchemaByDay = useCallback(
    (sessions: Array<Session>): Array<Session> =>
      sessions.filter((session) => {
        if (dayFilter === ScheduleDay.unset) {
          return true;
        }
        if (dayFilter === ScheduleDay.friday) {
          return session.date.includes("2023-03-21");
        }
        if (dayFilter === ScheduleDay.saturday) {
          return session.date.includes("2023-03-22");
        }
      }),
    [dayFilter]
  );

  return { handleDayFilter, filterSchemaByDay, dayFilter };
};

export default useDateFilter;
