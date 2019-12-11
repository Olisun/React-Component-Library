import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class ProductListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: "",
      price: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const { addProduct } = this.props;
    event.preventDefault();
    addProduct(this.state);
    this.setState({
      product: "",
      price: ""
    })
  }

  render() {
    const { product, price } = this.state
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <form>
        <label htmlFor="product">New Product: </label>
        <input
          id="product"
          name="product"
          value={product}
          onChange={this.handleInputChange}
        />
        <label htmlFor="price">Price: </label>
        <input
          id="price"
          name="price"
          type="number"
          value={price}
          onChange={this.handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          style={myStyles}
          onClick={this.handleFormSubmit}>
          Add New Thingy
        </Button>
      </form>
    )
  }
}

export default ProductListForm;
