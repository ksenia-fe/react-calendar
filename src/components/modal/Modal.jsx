import React, { useState } from "react";
import moment from "moment";

import { createEvent } from "../../gateway/events";
import { getDateTime } from "../../utils/dateUtils";

import "./modal.scss";

const Modal = ({ handleEventsRequest, closeModal }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const createEventHandler = (event) => {
    event.preventDefault();

    const newEvent = {
      title,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
      description,
      status: false,
    };

    createEvent(newEvent).then(() => handleEventsRequest());
    closeModal();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>
            +
          </button>
          <form className="event-form" onSubmit={createEventHandler}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
