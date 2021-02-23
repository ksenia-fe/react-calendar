import React, { useEffect, useState } from "react";

import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { fetchEvents, updateEvent, deleteEvent } from "./gateway/events";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  useEffect(() => {
    requestForEvents();
  }, []);

  const requestForEvents = () => {
    fetchEvents()
      .then((events) => setEvents(events))
      .catch((error) => alert(error.message));
  };

  const handleStatusEvent = (id) => {
    const { statusEvent, ...task } = events.find((item) => item.id == id);
    const updatedEvents = {
      statusEvent: !statusEvent,
      ...task,
    };

    updateEvent(id, updatedEvents).then(() => requestForEvents());
  };

  const handleDeleteEvent = (id) =>
    deleteEvent(id).then(() => requestForEvents());

  return (
    <>
      <Header
        prevWeek={() => {
          setweekStartDate(
            new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
          );
        }}
        nextWeek={() => {
          setweekStartDate(
            new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
          );
        }}
        requestForEvents={requestForEvents}
        setTodaysDate={() => {
          setweekStartDate(new Date());
        }}
        weekStartDate={weekStartDate}
        weekDates={weekDates}
      />
      <Calendar
        weekDates={weekDates}
        weekDates={weekDates}
        handleDeleteEvent={handleDeleteEvent}
        handleStatusEvent={handleStatusEvent}
        events={events}
      />
    </>
  );
};

export default App;
