import React, { useState, useEffect } from "react";
import { getDailyCelebrity } from "../api/daily";
import Photo from "./Photo";
import Hint from "./Hint";
import GuessList from "./GuessList";
import "../styles/Game.css";

function Game() {
  const [photo, setPhoto] = useState(null);
  const [allHints, setAllHints] = useState([]);
  const [displayedHints, setDisplayedHints] = useState([]);
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [guessCount, setGuessCount] = useState(5);
  const [showPhoto, setShowPhoto] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    getDailyCelebrity().then((data) => {
      setPhoto(data.photo);
      setAllHints(data.hints);
    });
  }, []);

  const startGame = (showPhoto) => {
    setGameStarted(true);
    setShowPhoto(showPhoto);
    setDisplayedHints([allHints[0]]);
  };

  const handleGuess = () => {
    if (guess.trim() === "") {
      alert("Please enter a guess.");
      return;
    }

    if (guess.toLowerCase() === "cristiano ronaldo".toLowerCase()) {
      setCorrectGuess(true);
      alert("Congratulations! You guessed correctly.");
    } else {
      setGuesses([...guesses, guess]);
      setGuess("");
      setGuessCount(guessCount - 1);

      if (guessCount - 1 > 0) {
        setDisplayedHints([...displayedHints, allHints[6 - guessCount]]);
      } else {
        alert("Game Over! Better luck next time.");
      }
    }
  };

  return (
    <div className="game">
      <div className="photo-container">
        {!gameStarted ? (
          <div className="question-mark-container">
            <div className="question-mark">?</div>
          </div>
        ) : (
          showPhoto && <Photo src={photo} />
        )}
        {!gameStarted && (
          <div className="game-description">
            <p>
              <strong>famousable</strong>...is a game where you guess the daily
              famous person.
            </p>
            <ul>
              <li>
                ...You will be given hints to guess the name of the celebrity.
              </li>
              <li>
                ...You can choose to see the celebrity's photo or not at the
                beginning.
              </li>
              <li>
                ...You have a limited number of guesses to identify the
                celebrity correctly.
              </li>
            </ul>
          </div>
        )}
        {!gameStarted && (
          <div className="button-container">
            <button onClick={() => startGame(true)}>Show Photo</button>
            <button onClick={() => startGame(false)}>Hide Photo</button>
          </div>
        )}
      </div>
      {gameStarted && (
        <div className="game-content">
          <div className="hint-list">
            {!correctGuess &&
              guessCount > 0 &&
              displayedHints.map((hint, index) => (
                <Hint key={index} text={hint} />
              ))}
          </div>
          <div className="guess-list">
            <GuessList guesses={guesses} />
          </div>
        </div>
      )}
      {gameStarted && (
        <div className="guess-input">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={correctGuess || guessCount === 0}
          />
          <button
            onClick={handleGuess}
            disabled={correctGuess || guessCount === 0}
          >
            Guess
          </button>
        </div>
      )}
      {gameStarted && (
        <div className="guess-count">{guessCount} guesses left</div>
      )}
    </div>
  );
}

export default Game;
