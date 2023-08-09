import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MyHeader />
      <header className="App-header">안녕 리액트</header>
      <MyFooter />
    </React.Fragment>
  );
}

export default App;
