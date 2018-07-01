import React from "react";
import "./assets/css/style.css";
import QuoteBox from "./components/QuoteBox";

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Welcome to Motie-Quotie</h1>
        </header>
        <QuoteBox />
        <button type="button" className="btn btn-secondary" id="new-quote">
          New Quote
        </button>
        <a href="http://www.twitter.com/intent/tweet">
          <button type="button" className="btn btn-primary" id="tweet-quote">
            Tweet Quote
          </button>
        </a>
      </div>
    );
  }
}

export default App;
