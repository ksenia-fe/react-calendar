import React from "react";
import events from "../../gateway/events";
import "./modal.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      dateFrom: "",
      dateTo: "",
      description: "",
    };
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleStartTime = (e) => {
    this.setState({
      dateFrom: e.target.value,
    });
  };

  handleEndTime = (e) => {
    this.setState({
      dateTo: e.target.value,
    });
  };

  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  createEvent = (e) => {
    e.preventDefault();
    events.push(this.state);
    console.log(events);
  };

  render() {
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button
              className="create-event__close-btn"
              onClick={this.props.closeModal}
            >
              +
            </button>
            <form className="event-form" onSubmit={this.createEvent}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                onChange={this.handleTitle}
                value={this.state.title}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  onChange={this.handleDate}
                  value={this.state.date}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleStartTime}
                  value={this.state.dateFrom}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={this.handleEndTime}
                  value={this.state.dateTo}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                onChange={this.handleDescription}
                value={this.state.description}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
