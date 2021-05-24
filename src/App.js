import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="card-body"><Weather defaultCity="Boston" /></div>
      <footer className="App-footer">
        This project was coded by <a href="https://goofy-dubinsky-84ab58.netlify.app/" target="_blank" rel="noreferrer">Zyna Pen</a>
        <br />
        Open-sourced on <a href="https://github.com/zynapen/weather-react" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://adoring-brown-818a52.netlify.app" target="_blank" rel="noreferrer">Netifly</a>
      </footer>
    </div>
      </div>
  );
}


