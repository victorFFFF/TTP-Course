import React from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

const App = (props) => {
  return (
    <div className="App">
      <h1>Pokemon APIs</h1>
      <Pokemon />
    </div>
  );
};

export default App;
