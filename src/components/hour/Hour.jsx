// check props
import React from "react";
import Event from "../event/Event";
import { formatMins } from "../../utils/dateUtils.js";

const Hour = ({ dataHour, hourEvents, requestForEvents }) => {
  return (
    <>
      <div className="calendar__time-slot" data-time={dataHour + 1}>
        {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
          const eventStart = `${dateFrom.getHours()}:${formatMins(
            dateFrom.getMinutes()
          )}`;
          const eventEnd = `${dateTo.getHours()}:${formatMins(
            dateTo.getMinutes()
          )}`;

          return (
            <Event
              key={id}
              height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
              marginTop={dateFrom.getMinutes()}
              time={`${eventStart} - ${eventEnd}`}
              title={title}
              requestForEvents={requestForEvents}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Hour;
