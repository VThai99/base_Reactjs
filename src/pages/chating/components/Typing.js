import React from "react";

function Typing(props) {
  return (
    <div className="typing">
      {props.name}
      <div className="typing__dot">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Typing;
