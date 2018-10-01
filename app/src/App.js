import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Project!</h1>
        </header>
        <p className="App-intro">
          Hello World
        </p>
      </div>
    );
  }
}

class Apptwo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is the Second App!</h1>
        </header>
        <p className="App-intro">
          Hello Second World
        </p>
      </div>
    );
  }
}

class Appthree extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Third time's the charm</h1>
        </header>
        <p className="App-intro">
          Chicken!
        </p>
      </div>
    );
  }
}


export default App;