import 'purecss/build/pure.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router routes={routes} history={browserHistory} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
