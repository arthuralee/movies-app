import React from "react";
import "./App.css";

import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies</h1>
      </header>
      <Movies />
    </div>
  );
}

export default App;
