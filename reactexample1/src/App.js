import logo from "./logo.svg";
// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import React from "react";
import Counter from "./Counter";

function App() {
  let name = "홍길동";
  const number = 5;
  const style = {
    App: {
      backgroundColor: "white",
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
        {number}는 {number % 2 ? "홀수" : "짝수"}
      </b>
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;
