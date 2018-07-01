import React from "react";
import unirest from "unirest";

class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: ""
    };
  }

  // componentDidMount() {
  //   fetch("https://randomuser.me/api/?results=10")
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(data => {
  //       let email = data.results.map(mail => {
  //         return <div key={mail.results}>{mail.email}</div>;
  //       });
  //       this.setState({ email: email });
  //       console.log("state", this.state.email);
  //     });
  // }

  componentDidMount() {
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
  }

  render() {
    return (
      <div className="container" id="quote-box">
        <h2>This is the container to test quotes</h2>
        <div className="row">
          <div className="col">
            <p id="text">{this.state.quote}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p id="author">-{this.state.author}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
