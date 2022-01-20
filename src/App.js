import React from "react";
import "./App.css";
import { connect } from "react-redux";
import data from "./data/dogs";

function App(props) {
  const dogs = data;

  return (
    <div className="App">
      <h1>Search for a Doggo</h1>

      <form>
        <input />
        <button>Find</button>
      </form>
    </div>
  );
}

export default App;
