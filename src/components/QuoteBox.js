import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
      <div className="container" id="quote-box">
        <div className="row">
          <div className="col">
            <h2 id="text">{this.props.quote}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 id="author">-{this.props.author}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
