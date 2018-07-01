import React from "react";

class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      email: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let email = data.results.map(mail => {
          return <div key={mail.results}>{mail.email}</div>;
        });
        this.setState({ email: email });
        console.log("state", this.state.email);
      });
  }

  render() {
    return (
      <div className="container" id="quote-box">
        <h2>This is the container to test quotes</h2>
        <div className="row">
          <div className="col">
            <p id="text">{this.state.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p id="author">some author</p>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
