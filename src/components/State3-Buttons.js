import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class State3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
  };

  handleClick = () => {
    const { score } = this.state;
    this.setState({
      score: score + 1
    })
  }

  handleClick2 = () => {
    const { score } = this.state;
    this.setState({
      score: score + 5
    })
  }
  
  // updateScore with handleClick3 is the correct way to update current state.

  updateScore = (currentState) => {
    return {
      score: currentState.score + 5
    }
  }

  handleClick3 = () => {
    this.setState(this.updateScore)
  }

  render() {
    const { score } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="styleOne">
        <h1>SCORE: {score}</h1>
        <Button 
          onClick={this.handleClick} 
          variant="contained" 
          color="primary" 
          style={myStyles}>
          Add 1
        </Button>
        <Button 
          onClick={this.handleClick2} 
          variant="contained" 
          color="primary" 
          style={myStyles}>
          Add 5
        </Button>
        <Button 
          onClick={this.handleClick3} 
          variant="contained" 
          color="primary" 
          style={myStyles}>
          Add 5 (Correct Way)
        </Button>
      </div>
    )
  }
}

export default State3;