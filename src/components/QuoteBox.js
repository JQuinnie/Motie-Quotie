import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
      <div className="container" id="quote-box">
        <div className="row align-items-center">
          <div className="col-12 align-self-center">
            <div id="text">{this.props.quote}</div>
          </div>
          <div className="col-12 align-self-end">
            <div className="text-right" id="author">
              -{this.props.author}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
