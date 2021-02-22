import React from "react";
import Day from "../day/Day";
import "./week.scss";

const Week = ({ weekDates, events, requestForEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        const daysWithWithoutLine = [];
        daysWithWithoutLine.push(
          new Date().getDate() === dayStart.getDate() &&
            new Date().getMonth() === dayStart.getMonth()
        );

        return (
          <Day
            key={dayStart.getDate()}
            dayEvents={dayEvents}
            requestForEvents={requestForEvents}
            daysWithWithoutLine={daysWithWithoutLine}
          />
        );
      })}
    </div>
  );
};

export default Week;
