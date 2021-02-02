import React from "react";
import Hour from "../hour/Hour";
import RedLine from "../redLine/RedLine";
import "./day.scss";

const Day = ({ dataDay, dayEvents, today }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <>
            <Hour
              key={dataDay + hour}
              dataHour={hour}
              hourEvents={hourEvents}
            />
            {/* <RedLine today={today} /> */}
          </>
        );
      })}
    </div>
  );
};

export default Day;
