import React, { Component } from 'react'
  ; import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)
    // Getting the cards to stack on top of each other at random angles.
    // The reason why the code below is in the constructor is because if it is all in render(), all cards will be transformed.  This way, only the drawn card on top gets transformed.
    let angle = Math.random() * 90 - 45;  // <-- randomly selected numbers
    let xPosition = Math.random() * 40 - 20;   // <-- randomly selected numbers
    let yPosition = Math.random() * 40 - 20;   // <-- randomly selected numbers
    this.transform = `translate(${xPosition}px, ${yPosition}px) rotate(${angle}deg)`
  }


  render() {
    const { image, name } = this.props;
    return (
      <img
        style={{ transform: this.transform }}
        className="Card"
        src={image}
        alt={name}
      />
    )
  }
}

export default Card;
