import React from "react";

import "./sidebar.scss";

const Sidebar = (props) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__time-scale">
      {hours.map((hour, ind) => (
        <div className="time-slot" key={ind}>
          {/*to do keys */}
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
