import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class FormBox extends Component {
  render() {
    const { height, width, color, removeBox } = this.props;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div>
        <div style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: color,
        }}>
        </div>
        <Button
          onClick={removeBox}
          variant="contained"
          color="primary"
          style={myStyles}>
          Remove
        </Button>
      </div>
    )
  }
}

export default FormBox;
