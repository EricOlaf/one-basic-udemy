import React, { Component } from "react";
import "./App.css";

import UI from "./components/UserInput/UserInput";
import UO from "./components/UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: ""
  };
  render() {
    return (
      <div className="App">
        <UI />
        <UO />
        <UO />
      </div>
    );
  }
}

export default App;
