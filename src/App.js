import React from "react";
import "./App.css";

import DisplayCards from "./components/displayCards";

function App() {
  return (
    <div className="App">
      <h1 className="page-header">Match 2 cards</h1>
      <DisplayCards />
    </div>
  );
}

export default App;
