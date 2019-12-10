import React, { Component } from 'react'

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.makeTimer();
  }

  makeTimer = () => {
    const { maxNumber } = this.props;
    setInterval(() => {
      let random = Math.floor(Math.random() * maxNumber);
      this.setState({ 
        number: random 
      });
    }, 1000);
  }

  render() {
    const { number } = this.state;
    console.log('Changing State')
    return (
      <div className="styleOne">
        <h1>The random number is: {number}</h1>
      </div>
    )
  }
}

export default State;