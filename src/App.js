import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Game />} />
          {/* Diğer route'lar burada tanımlanabilir */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
