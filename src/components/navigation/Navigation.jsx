import React from "react";

import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, ind) => (
        <div className="calendar__day-label day-label" key={ind}>
          {/*to do keys */}
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          {/* mon tur wed ...*/}
          <span className="day-label__day-number">{dayDate.getDate()}</span>
          {/*1 2 3 4 5 6 7 */}
        </div>
      ))}
    </header>
  );
};

export default Navigation;
