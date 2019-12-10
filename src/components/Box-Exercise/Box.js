import React, { Component } from 'react';
import './Box.css';
import { ThemeProvider } from '@material-ui/styles';
import choice from '../Helpers'

class Box extends Component {
  static defaultProps = {
    allColors: ["blue", "purple", "orange", "green", "red", "yellow", "pink"]
  }

  constructor(props) {
    super(props);
    const { allColors } = this.props;
    this.state = {
      color: choice(allColors)
    }
  }

  pickColor = () => {
    const { allColors } = this.props;
    const { color } = this.state;
    let newColor;
    do {  // <-- do-while loop prevents the same color from being picked twice.
      newColor = choice(allColors)
    } while (newColor === color);
    this.setState({
      color: newColor
    });
  }

  handleClick = () => {
    this.pickColor()
  }

  render() {
    const { color } = this.state;
    return (
      <div
        className="Box"
        style={{ backgroundColor: color }}
        onClick={this.handleClick}>
      </div>
    )
  }
}

export default Box;
