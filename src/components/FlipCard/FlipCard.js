import React, { Component } from 'react'
import './Flip.css'

class FlipCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="front">Front Side</div>
        <div className="back">Back Side</div>
      </div>
    )
  }
}

export default FlipCard;