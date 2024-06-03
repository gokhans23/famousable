import React from "react";
import "../styles/GuessList.css";

function GuessList({ guesses }) {
  return (
    <div className="guess-list">
      {guesses.map((guess, index) => (
        <div key={index} className="guess-item">
          {index + 1}. {guess}
        </div>
      ))}
    </div>
  );
}

export default GuessList;
