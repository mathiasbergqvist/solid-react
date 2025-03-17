import React from "react";
import Button from "../../../../design-system/Button/Button";
import styles from "./DateFilter.module.css";
import { ButtonType } from "../../../../design-system/Button/Button.enums";
import { ScheduleDay } from "../../../../models/ScheduleDay";
import Icon from "../../../../design-system/Icon/Icon";
import { IconType } from "../../../../design-system/Icon/Icon.enums";

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
      onClick={() => handleDayFilter(ScheduleDay.unset)}
      selected={currentFilter === ScheduleDay.unset}
      icon={<Icon icon={IconType.hand} iconLabel="Emoji med öppna händer" />}
    />
    <Button
      text="2023-03-21"
      buttonType={ButtonType.secondary}
      onClick={() => handleDayFilter(ScheduleDay.friday)}
      selected={currentFilter === ScheduleDay.friday}
      icon={
        <Icon
          icon={IconType.one_finger}
          iconLabel="Emoji med en hand som sträcker upp ett finger"
        />
      }
    />
    <Button
      text="2023-03-22"
      buttonType={ButtonType.secondary}
      onClick={() => handleDayFilter(ScheduleDay.saturday)}
      selected={currentFilter === ScheduleDay.saturday}
      icon={
        <Icon
          icon={IconType.two_fingers}
          iconLabel="Emoji med en hand som sträcker upp två fingrar"
        />
      }
    />
  </div>
);

export default DateFilter;
