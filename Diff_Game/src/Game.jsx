import React, { useState, useEffect } from "react";
import ImagePanel from "./ImagePanel";

function Game({ config }) {
  const [differences, setDifferences] = useState(
    config.differences.map(d => ({ ...d, found: false }))
  );
  const [score, setScore] = useState(0);

  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const handleFind = (index) => {
    if (!differences[index].found) {
      const updated = [...differences];
      updated[index].found = true;
      setDifferences(updated);

      setScore(score + 1);

      if (score + 1 === differences.length) {
        setRunning(false);
      }
    }
  };

  return (
    <div className="game-container">
    
    <div className={`game-content ${!running && score === differences.length ? "blurred" : ""}`}>
      <div className="info-bar">
        <p>Found: {score}/{differences.length}</p>
        <p>Time: {timer}s</p>
      </div>
  
      <div className="game-grid">
        <ImagePanel
          imgSrc={config.images.image1}
          differences={differences}
          onFind={handleFind}
        />
  
        <ImagePanel
          imgSrc={config.images.image2}
          differences={differences}
          onFind={handleFind}
        />
      </div>
      </div>
  
      {!running && score === differences.length && (
        <div className="win-overlay">
          <div className="win-popup">
            <h2> You Won! </h2>
            <p>You found all differences in {timer} seconds!</p>
  
            <button
              className="restart-btn"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default Game;
