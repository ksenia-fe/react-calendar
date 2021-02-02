import React from "react";
import Modal from "../modal/Modal";

import { months } from "../../utils/dateUtils.js";
import events from "../../gateway/events";

import "./header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  createEvent = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    return (
      <>
        <header className="header">
          <button
            className="button create-event-btn"
            onClick={this.createEvent}
          >
            <i className="fas fa-plus create-event-btn__icon"></i>
            Create
          </button>
          <div className="navigation">
            <button
              className="navigation__today-btn button"
              onClick={this.props.today}
            >
              Today
            </button>
            <button
              className="icon-button navigation__nav-icon"
              onClick={this.props.prevWeek}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="icon-button navigation__nav-icon"
              onClick={this.props.nextWeek}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <span className="navigation__displayed-month">
              {months[new Date().getMonth()]}
            </span>
          </div>
        </header>
        {this.state.isModalVisible && <Modal closeModal={this.closeModal} />}
      </>
    );
  }
}

export default Header;

// algo
// change data of first day in a week for +/- 7
