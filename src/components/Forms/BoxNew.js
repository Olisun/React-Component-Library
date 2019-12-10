import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import uuid from "uuid/v4";


class BoxNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: "",
      width: "",
      color: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = event => {
    const { createBox } = this.props;
    const newBox = { ...this.state, id: uuid() };
    event.preventDefault();
    createBox(newBox);
    this.setState({
      height: "",
      width: "",
      color: ""
    })
  }

  render() {
    const { height, width, color } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <form>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            value={height}
            onChange={this.handleInputChange}>
          </input>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            value={width}
            onChange={this.handleInputChange}>
          </input>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            value={color}
            onChange={this.handleInputChange}>
          </input>
        </div>
        <Button
          onClick={this.handleClick}
          variant="contained"
          color="primary"
          style={myStyles}>
          Add New Box
        </Button>
      </form>

    )
  }
}

export default BoxNew;
