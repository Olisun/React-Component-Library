import React, { Component } from 'react';
import Images from './Images';
import images from './images.json';
import './Imagedex.css';
import { WOW } from 'wowjs/dist/wow';


class Imagedex extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="wow zoomIn slow">
        <div className="Imagedex-cards" className="styleTwo">
          {images.map(image => (
            <Images
              key={image.id}
              id={image.id}
              character={image.character}
              title={image.character}
              image={image.image}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Imagedex;