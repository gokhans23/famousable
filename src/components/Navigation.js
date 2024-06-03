import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* Diğer navigasyon linkleri buraya eklenebilir */}
    </nav>
  );
}

export default Navigation;
