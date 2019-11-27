import React, { Component } from 'react';

const fruitsArray = ['🍏', '🥑', '🍑', '🍓', '🥝']
const random = fruitsArray[Math.floor(Math.random() * fruitsArray.length)];

class Fruits extends Component {
  render() {
    return (      
      <div className="styleOne">
        <h1>You get to eat a {random}</h1>
      </div>
    );
  }
}

export default Fruits;
       