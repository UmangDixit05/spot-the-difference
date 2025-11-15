import React, { useEffect, useState } from "react";
import Game from "./Game";
import "./style.css";

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/spot-the-difference/config.json")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => setConfig(data))
    .catch((err) => {
      console.error("Failed to load config:", err);
    });
  }, []);

  if (!config) return <div className="loading">Loading game...</div>;

  return (
    <div className="app">
      <h1>{config.gameTitle}</h1>
      <Game config={config} />
    </div>
  );
}

export default App;
