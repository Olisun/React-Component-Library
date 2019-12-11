import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import Button from '@material-ui/core/Button';
import './ButtonList.css';

class ButtonList extends Component {
  static defaultProps = {
    colors: ["green", "blue", "orange", "red"]
  };

  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  changeColor = (color) => {
    console.log(`new color is ${color}`);
    this.setState({ color: color });
  }

  render() {
    const { colors } = this.props;
    const { color } = this.state;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <div className="ButtonList" style={{ backgroundColor: color }}>
            {colors.map(color => {
              const colorObject = { backgroundColor: color, color: "white" }
              return <Button
                style={colorObject}
                onClick={() => { this.changeColor(color) }}  // <-- Since changeColor needs an arguement, you need to bind changeColor with an arrow function.
              >Background Color</Button>;
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ButtonList
