import React from "react";
import Hour from "../hour/Hour";
import "./day.scss";
import RedLine from "../redLine/RedLine";

const Day = ({
  dayEvents,
  daysWithWithoutLine,
  today,
  handleDeleteEvent,
  handleStatusEvent,
  events,
  handleEventsRequest,
}) => {
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
                bool === true &&
                new Date().getHours() === hour && <RedLine today={today} />
            )}
            <Hour
              dataHour={hour}
              hourEvents={hourEvents}
              handleStatusEvent={handleStatusEvent}
              handleDeleteEvent={handleDeleteEvent}
              handleEventsRequest={handleEventsRequest}
              events={events}
            />
          </>
        );
      })}
    </div>
  );
};

export default Day;
