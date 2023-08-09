import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import React from "react";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <h2>Hello React</h2>
      <b id="bold_text">react.js</b>
      <MyFooter />
    </div>
  );
}

export default App;
