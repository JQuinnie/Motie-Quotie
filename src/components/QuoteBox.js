import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
      <div className="container" id="quote-box">
        <h2>This is the container to test quotes</h2>
        <div className="row">
          <div className="col">
            <p id="text">{this.props.quote}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p id="author">-{this.props.author}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
