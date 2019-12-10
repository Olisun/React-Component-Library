import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { WOW } from 'wowjs/dist/wow';
import './DiceRoll.css';
import Die from '../Dice-Project/Die'


class DiceRoll extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'two',
      isRolling: false
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  roll = () => {
    const { sides } = this.props;
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    this.setState({
      die1: newDie1,
      die2: newDie2,
      isRolling: true
    });
    setTimeout(() => {
      this.setState({
        isRolling: false
      });
    }, 1000)
  }

  render() {
    const { die1, die2, isRolling } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <div className="DiceRoll">
            <div className="DiceRoll-container">
              <Die
                face={die1}
                rolling={isRolling}
              />
              <Die
                face={die2}
                rolling={isRolling}
              />
            </div>
            <Button
              onClick={this.roll}
              variant="contained"
              color="primary"
              style={myStyles}
              disable={isRolling}>
              {isRolling ? "ROLLING" : "Role Dice"}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default DiceRoll;