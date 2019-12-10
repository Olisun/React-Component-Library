import React, { Component } from 'react';
import { WOW } from 'wowjs/dist/wow';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numberOfBoxes: 24,
  }

  componentDidMount ()  {
    new WOW().init()
  }

  render() {
    const { numberOfBoxes } = this.props;
    // Array.from turns numberOfBoxes from an object to an array so we can map 18 boxes.
    const boxes = Array.from({ length: numberOfBoxes }).map(() => (<Box />));
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">  
          <div className="BoxContainer">
            {boxes}
          </div>
        </div>
      </div>

    )
  }
}

  export default BoxContainer;
  
  
