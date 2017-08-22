import React, { Component } from 'react';
import './App.css';
import {Logo} from "./Logo"
import {Header} from "./Header"
import {Devices} from "./Devices";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
          <Header/>
          <Devices/>
      </div>
    );
  }
}

export default App;
