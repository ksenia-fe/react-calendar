import React from "react";

// const RedLine = () => {
//   const style = { marginTop: new Date().getMinutes() };

//   return <div className="red-line" style={style}></div>;
// };

class RedLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: new Date().getMinutes(),
    };
  }

  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        minutes: this.state.minutes + 1,
      });
    }, 60000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div className="red-line" style={{ marginTop: this.state.minutes }}></div>
    );
  }
}
export default RedLine;
