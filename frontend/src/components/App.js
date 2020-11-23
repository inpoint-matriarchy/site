import React, { Component } from "react";
import { render } from "react-dom";
// import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Проверка</h1>
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

    // (
    //   <div>
    //     <HomePage />
    //   </div>
    // );