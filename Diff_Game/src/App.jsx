import React, { useEffect, useState } from "react";
import Game from "./Game";
import "./style.css";

function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/config.json")
      .then(res => res.json())
      .then(data => setConfig(data));
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
