import React, { Component } from "react";
import { render } from "react-dom";
import { Card, Button, Body, Text, Title } from "react-bootstrap";
import ReactDOM from "react-dom";
import ReactWOW from "react-wow"
import { WOW } from 'wowjs/dist/wow';

import "./ProductCard.css";
import ExampleModal from "../modal/Modal";

class ProductCard extends Component {
  componentDidMount() {
    new WOW().init()
  }

  render() {
    const { id, name, description, forModal, forModal2 } = this.props;
    return (
      <div className="container">
        <div className="wow pulse">
          <Card className="product-card">
            <Card.Body>{id}
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <ExampleModal
                content={forModal}
                moreContent={forModal2}
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default ProductCard;
