import React from "react";
import "../styles/Hint.css";

function Hint({ text }) {
  return (
    <div className="hint">
      <p>{text}</p>
    </div>
  );
}

export default Hint;
