import logo from "./logo.svg";
// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import React from "react";

function App() {
  let name = "홍길동";
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };
  return (
    <div className="App" style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>Hello React, I'm {name}</h2>
      <b style={style.bold_text} id="bold_text">
        react.js
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
