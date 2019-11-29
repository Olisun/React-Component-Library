import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class NumberItem extends Component {
  constructor(props) {
    super(props);
    this.props = {
      // this.HandleRemove = this.HandleRemove.bind(this) would go in here but since HandleRemove is an arrow function, the constructor can be left out.
    }
  }

  HandleRemove = (event) => {
    console.log("Inside")
    const { remove, value } = this.props
    remove(value);
  }

  render() {
    const { value } = this.props;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <li>
        {value}
        <Button
          onClick={this.HandleRemove}
          variant="contained"
          color="primary"
          style={myStyles}>
          Remove
        </Button>
      </li>
    )
  }
}

export default NumberItem;
