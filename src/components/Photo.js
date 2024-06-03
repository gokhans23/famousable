import React from "react";
import "../styles/Photo.css";

function Photo({ src }) {
  return (
    <div className="photo">
      <img src={src} alt="Daily celebrity" />
    </div>
  );
}

export default Photo;
