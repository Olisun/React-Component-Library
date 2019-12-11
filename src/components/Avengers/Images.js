import React, { Component } from 'react';
import './Images.css';
import image from './images.json';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Images extends Component {
  render() {
    const { id, character, image } = this.props;

    return (
      <div className="Images">
        <Card>
          <CardImg src={image} />
          <CardBody>
            <CardTitle>{id}</CardTitle>
            <CardText>{character}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Images;