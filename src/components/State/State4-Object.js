import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { WOW } from 'wowjs/dist/wow';

class State4 extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "baby",
      "bell",
      "bone",
      "car",
      "city"
    ]
  }

  componentDidMount() {
    new WOW().init()
  }

  constructor(props) {
    super(props);
    this.state = {
      icons: ["angry"]
    }
  }

  // The correct way to update state is to copy the object's data structure's initial state and then call setState with the new copy.

  addIcon = () => {
    const { options } = this.props;
    let { icons } = this.state;
    let newIcon = options[Math.floor(Math.random() * options.length)]
    console.log(newIcon)
    this.setState({
      icons: [...this.state.icons, newIcon]
    })
    console.log(icons)
  }

  render() {
    const icons = this.state.icons.map(icon => <i className={`fas fa-${icon}`} />);
    console.log(icons)
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>Icons: {icons}</h1>
          <Button
            onClick={this.addIcon}
            variant="contained"
            color="primary"
            style={myStyles}>
            Add Icon
          </Button>
        </div>
      </div>
    )
  }
}

export default State4;