import React from 'react';
import logo from './logo.svg';
import './assets/css/style.css';
import randGen from './logic.js';
import QuoteBox from './components/QuoteBox';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Welcome to Motie-Quotie</h1>
        </header>
        <QuoteBox />
        <p className="text">
          {randGen.quote}
          <br />
          {randGen.author}
        </p>
        <button type="button" class="btn btn-secondary">New Quote</button>
      </div>
    );
  }
}

export default App;
