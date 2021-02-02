import React from "react";
import "./event.scss";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventStyle: {
        height: this.props.height,
        marginTop: this.props.marginTop,
      },
      isDeleteBtnVisible: false,
      isEventIsVisible: true,
    };
  }

  showDeleteBtn = () => {
    this.setState({
      isDeleteBtnVisible: !this.state.isDeleteBtnVisible,
    });
  };

  deleteEvent = () => {
    this.setState({
      isDeleteBtnVisible: false,
      isEventIsVisible: false,
    });
  };

  render() {
    const { eventStyle } = this.state;

    return (
      <>
        {this.state.isEventIsVisible && (
          <div
            style={eventStyle}
            className="event"
            onClick={this.showDeleteBtn}
          >
            <div className="event__title">{this.props.title}</div>
            <div className="event__time">{this.props.time}</div>
          </div>
        )}
        {this.state.isDeleteBtnVisible && (
          <div className="delete-event-btn" onClick={this.deleteEvent}>
            <i className="fas fa-trash"></i>
            <span> Delete</span>
          </div>
        )}
      </>
    );
  }
}

export default Event;
