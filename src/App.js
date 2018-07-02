import React from "react";
import "./assets/css/style.css";
import unirest from "unirest";
import QuoteBox from "./components/QuoteBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    let data = [];
    unirest
      .get("https://quotes.p.mashape.com/?category=motivational")
      .header(
        "X-Mashape-Key",
        "dAjNdbLtlrmshbT9kg80hF0BvWWvp1MsfD0jsnG9VJgmo8lo9T"
      )
      .header("Accept", "application/json")
      .end(result => {
        console.log(result.body);
        data = result.body;

        this.setState({
          quote: data.quote,
          author: data.author
        });
      });
  };

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Welcome to Motie-Quotie</h1>
        </header>
        <QuoteBox quote={this.state.quote} author={this.state.author} />
        <button
          type="button"
          className="btn btn-secondary"
          id="new-quote"
          onClick={this.fetchQuote}
        >
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
