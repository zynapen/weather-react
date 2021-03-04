import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Weather ReactJS
        </h1>
        <Weather />
      <br />
      <footer className="App-footer">
        This project was coded by <a href="https://www.linkedin.com/in/zynapen/" target="_blank" rel="noreferrer">Zyna Pen</a> and is <a href="https://github.com/zynapen/weather-react" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}


