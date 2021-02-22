import React from "react";
import Hour from "../hour/Hour";
import "./day.scss";
import RedLine from "../redLine/RedLine";

const Day = ({ dayEvents, daysWithWithoutLine, requestForEvents }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day">
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <>
            {daysWithWithoutLine.map(
              (bool, ind) =>
                bool === true && new Date().getHours() === hour && <RedLine />
            )}
            <Hour hourEvents={hourEvents} requestForEvents={requestForEvents} />
          </>
        );
      })}
    </div>
  );
};

export default Day;
