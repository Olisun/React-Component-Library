import React, { Component } from 'react'
import './Flip.css'
import { WOW } from 'wowjs/dist/wow';
import FlipCard from './FlipCard';

class Flip extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </div>
      </div>
    )
  }
}

export default Flip;