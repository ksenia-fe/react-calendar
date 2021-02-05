// REFACTORED TO DO DELETING EVENT
import React, { useState } from "react";
import "./event.scss";

const Event = ({ title, time, handleDeleteEvent, height, marginTop, id }) => {
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
        <div className="delete-event-btn" onClick={() => handleDeleteEvent(id)}>
          <i className="fas fa-trash"></i>
          <span className="delete-event-btn__title">Delete</span>
        </div>
      )}
    </div>
  );
};

export default Event;
