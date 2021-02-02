import React, { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const today = () => {
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
      <Header prevWeek={prevWeek} nextWeek={nextWeek} today={today} />
      <Calendar weekDates={weekDates} today={today} />
    </>
  );
};

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   prevWeek = () => {
//     // console.log("prev");
//     setweekStartDate(
//       this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() - 7)
//     );
//   };

//   nextWeek = () => {
//     console.log("next");
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header prevWeek={this.prevWeek} nextWeek={this.nextWeek} />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

export default App;
