import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';
import './Joke.css';

class Joke extends Component {
  render() {
    const { votes, text } = this.props;
    return (
      <div className="wow zoomIn slow">
        <div className="Joke">
          <div className="Joke-Buttons">
            <i className="fas fa-arrow-up"></i>
            <span>{votes}</span>
            <i className="fas fa-arrow-down"></i>
          </div>
          <div className="Joke-Text">
            {text}
          </div>
        </div>
      </div>
    )
  }
}

export default Joke;
