// REFACTORED TO DO DELETING EVENT
import React, { useState } from "react";
import { deleteEvent } from "../../gateway/events";
import "./event.scss";

const Event = ({ title, time, requestForEvents, height, marginTop, id }) => {
  const [isDeleteBtnVisible, toggleDeleteBtnVisibility] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      className="event"
      style={eventStyle}
      onClick={() => toggleDeleteBtnVisibility(!isDeleteBtnVisible)}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDeleteBtnVisible && (
        <div
          className="delete-event-btn"
          onClick={() => deleteEvent(id).then(() => requestForEvents())}
        >
          <i className="fas fa-trash"></i>
          <span className="delete-event-btn__title">Delete</span>
        </div>
      )}
    </div>
  );
};

export default Event;
