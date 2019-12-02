import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Ball from './Ball';
import { WOW } from 'wowjs/dist/wow';

class State5 extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNumber: 40
  };

  componentDidMount() {
    new WOW().init()
  }

  constructor(props) {
    super(props);
    const { maxBalls } = this.props;
    this.state = {
      numbers: Array.from({ length: maxBalls })  // <-- creates an array with the length of maxBalls (0-40)
    };
  }

  // Setting state by passing a callback into setState (the correct way) which picks a random # btw 0 and 40 and for each ball in the numbers array.  
  generate = () => {
    const { maxNumber } = this.props;
    this.setState(currentState => ({
      numbers: currentState.numbers.map(
        number => Math.floor(Math.random() * maxNumber) + 1
      )
    }));
  }

  handleClick = () => {
    this.generate();
  }

  render() {
    const { title } = this.props;
    const { numbers } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <section className="Lottery">
            <h1>{title}</h1>
            <div>
              {numbers.map(number => <Ball number={number} />)}
            </div>
            <Button
              onClick={this.handleClick}
              variant="contained"
              color="primary"
              style={myStyles}>
              Generate Balls
            </Button>
          </section>
        </div>
      </div>
    )
  }
}

export default State5;