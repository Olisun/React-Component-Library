import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
  render() {
    const { number } = this.props;
    return (
      <div className="Ball">{number}</div>
    )
  }
}

export default Ball;