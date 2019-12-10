import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class State2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      randomNumber: ""
    };
    // this.handleClick = this.handleClick.bind(this); <-- Need this if handleClick is NOT an arrow function!
  }

  handleClick = () => {
    const { counter } = this.state;
    let random = Math.floor(Math.random() * 10) + 1
    this.setState({
        counter: counter + 1,
        randomNumber: random
    })
  }

  render() {
    const { counter, randomNumber } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="styleOne">
        <h1>Number of Clicks: {counter}</h1>
        <h1>Random Number: {randomNumber}</h1>
        <h1>{randomNumber === 7 
          ? <h2>YOU GOT THE MAGIC NUMBER!</h2>
          : <Button 
              onClick={this.handleClick} 
              variant="contained" 
              color="primary" 
              style={myStyles}>
              Click for Random Number
            </Button>}
        </h1>
      </div>
    )
  }
}

export default State2;