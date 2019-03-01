import React, { Component } from "react";
import "./App.css";

import UI from "./components/UserInput/UserInput";
import UO from "./components/UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "ElGaupo"
  };

  nameHandler = e => {
    this.setState({ userName: e });
  };
  render() {
    const { userName } = this.state;
    return (
      <div className="App">
        <UI nh={this.nameHandler} name={userName} />
        <UO name={userName} />
        <UO />
      </div>
    );
  }
}

export default App;
