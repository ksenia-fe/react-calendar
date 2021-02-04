// REFACTORED. TO DO MONTH DISPLAYED
import React, { useState } from "react";

import Modal from "../modal/Modal";
import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({
  setTodaysDate,
  prevWeek,
  events,
  nextWeek,
  weekStartDate,
  handleEventsRequest,
}) => {
  const [isModalVisible, toggleModalVisibility] = useState(false);
  // const displayedMonth =
  //   weekStartDate.getMonth() ===
  //   weekStartDate.setDay(weekStartDate.getDay() + 7).getMonth(); // TO DO

  return (
    <>
      <header className="header">
        <button
          className="button create-event-btn"
          onClick={() => toggleModalVisibility(!isModalVisible)}
        >
          <i className="fas fa-plus create-event-btn__icon"></i>
          Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={setTodaysDate}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={prevWeek}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={nextWeek}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">
            {months[weekStartDate.getMonth()]}
          </span>
        </div>
      </header>
      {isModalVisible && (
        <Modal
          closeModal={() => toggleModalVisibility(!isModalVisible)}
          events={events}
          handleEventsRequest={handleEventsRequest}
        />
      )}
    </>
  );
};

export default Header;
