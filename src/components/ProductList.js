import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import uuid from "uuid/v4";
import ProductListForm from './ProductListForm';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        // {
        //   product: "Martin Guitar",
        //   price: 3000,
        //   id: uuid()
        // },
        // {
        //   product: "TV",
        //   price: 1000,
        //   id: uuid()
        // },
        // {
        //   product: "MacBook",
        //   price: 5000,
        //   id: uuid()
        // },
        // {
        //   product: "iPhone",
        //   price: 1000,
        //   id: uuid()
        // },
        // {
        //   product: "iPad",
        //   price: 1000,
        //   id: uuid()
        // },
        // {
        //   product: "Apple Watch",
        //   price: 500,
        //   id: uuid()
        // },
        // {
        //   product: "Air Relax",
        //   price: 400,
        //   id: uuid()
        // },
        // {
        //   product: "Leather Jacket",
        //   price: 500,
        //   id: uuid()
        // },
      ]
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  addProduct = product => {
    let newProduct = { ...product, id: uuid() };  // <-- The ... makes a new object with the key being id and the value being uuid()
    this.setState(state => ({
      products: [...state.products, newProduct]
    }));
    const { products } = this.state;
    console.log(products)
  }

  calculateTotal = () => {
    const { products } = this.state;
    let accumulator = 0;
    for (let i = 0; i < products.length; i++) {
      accumulator += products[i].price;
    }
    return accumulator
  }

  renderProducts = () => {
    const { products } = this.state
    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            Product: {product.product}, Price: {product.price}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>Product List</h1>
          {this.renderProducts()}
          <ProductListForm
            addProduct={this.addProduct}
          />
          <h4>Total Price: {this.calculateTotal()}</h4>
        </div>
      </div>
    )
  }
}

export default ProductList;
