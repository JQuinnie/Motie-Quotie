import React from 'react';
import logo from './logo.svg';
import './App.css';
import randGen from './logic.js';
import QuoteBox from './components/QuoteBox';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <QuoteBox />
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p className="text">
          {randGen.quote}
          {randGen.author}
        </p>
        <button>New Quote</button>
      </div>
    );
  }
}

export default App;
