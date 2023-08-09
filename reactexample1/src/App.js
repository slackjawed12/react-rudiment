import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import React from "react";

function App() {
  return (
    <>
      <MyHeader />
      <header className="App-header">안녕 리액트</header>
      <MyFooter />
    </>
  );
}

export default App;
