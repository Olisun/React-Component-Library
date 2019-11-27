import React, { Component } from 'react';
import { WOW } from 'wowjs/dist/wow';
import Box from './Box';

class BoxContainer extends Component {

  componentDidMount() {
    new WOW().init()
  }

  render() {
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>

    )
  }
}

export default BoxContainer;