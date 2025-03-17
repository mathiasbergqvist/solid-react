import React from "react";
import Button from "../../../../design-system/Button/Button";
import styles from "./DateFilter.module.css";
import {
  ButtonIcon,
  ButtonType,
} from "../../../../design-system/Button/Button.enums";
import { ScheduleDay } from "../../../../models/ScheduleDay";

type DateFilterProps = {
  handleDayFilter: (day: ScheduleDay) => void;
  currentFilter: ScheduleDay;
};

const DateFilter = ({ handleDayFilter, currentFilter }: DateFilterProps) => (
  <div className={styles.buttonGroup}>
    Välj dag:
    <Button
      text="Alla dagar"
      buttonType={ButtonType.secondary}
      icon={ButtonIcon.hand}
      iconLabel="Emoji med öppna händer"
      onClick={() => handleDayFilter(ScheduleDay.unset)}
      selected={currentFilter === ScheduleDay.unset}
    />
    <Button
      text="2023-03-21"
      buttonType={ButtonType.secondary}
      icon={ButtonIcon.one_finger}
      iconLabel="Emoji med en hand som sträcker upp ett finger"
      onClick={() => handleDayFilter(ScheduleDay.friday)}
      selected={currentFilter === ScheduleDay.friday}
    />
    <Button
      text="2023-03-22"
      buttonType={ButtonType.secondary}
      icon={ButtonIcon.two_fingers}
      iconLabel="Emoji med en hand som sträcker upp två fingrar"
      onClick={() => handleDayFilter(ScheduleDay.saturday)}
      selected={currentFilter === ScheduleDay.saturday}
    />
  </div>
);

export default DateFilter;
