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
    handleEventsRequest();
  }, []);

  function handleEventsRequest() {
    fetchEvents()
      .then((events) => setEvents(events))
      .catch((error) => alert(error.message));
  }

  const handleDeleteEvent = (id) => {
    deleteEvent(id).then(() => handleEventsRequest());
  };

  const handleStatusEvent = (id) => {
    const { statusEvent, ...task } = events.find((item) => item.id == id);
    const updatedEvents = {
      statusEvent: !statusEvent,
      ...task,
    };

    updateEvent(id, updatedEvents).then(() => handleEventsRequest());
  };

  const setTodaysDate = () => {
    setweekStartDate(new Date());
  };

  const prevWeek = () => {
    setweekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  const nextWeek = () => {
    setweekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };

  return (
    <>
      <Header
        prevWeek={prevWeek}
        nextWeek={nextWeek}
        handleEventsRequest={handleEventsRequest}
        setTodaysDate={setTodaysDate}
        weekStartDate={weekStartDate}
        events={events}
      />
      <Calendar
        weekDates={weekDates}
        today={weekStartDate}
        weekDates={weekDates}
        handleEventsRequest={handleEventsRequest}
        handleDeleteEvent={handleDeleteEvent}
        handleStatusEvent={handleStatusEvent}
        events={events}
      />
    </>
  );
};

export default App;
