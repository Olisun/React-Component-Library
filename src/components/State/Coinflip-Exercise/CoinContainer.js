import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { WOW } from 'wowjs/dist/wow';
import choice from '../Helpers'
import Coin from './Coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "Heads",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
      },
      {
        side: "Tails",
        imgSrc: "https://tinyurl.com/react-coin-tails-jpg"
      }
    ]
  }

  componentDidMount() {
    new WOW().init()
  }

  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      numberOfFlips: 0,
      numberOfHeads: 0,
      numberOfTails: 0
    }
  }

  flipCoin = () => {
    const { coins } = this.props;
    const newCoin = choice(coins);
    this.setState(state => {
      return {
        currentCoin: newCoin,
        numberOfFlips: state.numberOfFlips + 1,
        numberOfHeads: state.numberOfHeads + (newCoin.side === "Heads" ? 1 : 0),
        numberOfTails: state.numberOfTails + (newCoin.side === "Tails" ? 1 : 0)
      }
    })
  }

  handleClick = () => {
    this.flipCoin()
  }

  render() {
    const { currentCoin, numberOfFlips, numberOfHeads, numberOfTails } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="wow zoomIn slow">
        <div className="CoinContainer" className="styleOne">
          <h2>Let's flip a coin!</h2>
          <div>
            {currentCoin && <Coin info={currentCoin} />}
          </div>
          <Button
            onClick={this.handleClick}
            variant="contained"
            color="primary"
            style={myStyles}>
            FLIP COIN
          </Button>
          <p>Out of {numberOfFlips} flips, there have been {numberOfHeads} Heads and {numberOfTails} Tails.</p>
        </div>
      </div>
    )
  }
}

export default CoinContainer;