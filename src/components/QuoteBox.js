import React from 'react';

class QuoteBox extends React.Component {

  constructor() {
    super();
    this.state = {
      email: [],
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(results => {
        return results.json();
      }).then(data => {
        let email = data.results.map((mail) => {
          return (
            <div key={mail.results}>
              {mail.email}
            </div>
          )
        })
        this.setState({ email: email })
        console.log('state', this.state.email)
      })
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div className="col">
            <h1>This is the container to test quotes</h1>
            <p>{this.state.email}</p>
          </div>
        </div>
      </div>

    )
  }
}

export default QuoteBox;
