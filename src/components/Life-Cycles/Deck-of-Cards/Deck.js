import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null,
      drawn: []
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    new WOW().init();
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({
      deck: deck.data
    });
  }

  // Can't use arrow functions for async await. 
  async getCard() {
    const { deck } = this.state;
    let id = deck.deck_id;
    try {  // <-- try catch throws an error when all 52 cards are drawn.
      let cardURL = `${API_BASE_URL}/${id}/draw/`;
      let cardResponse = await axios.get(cardURL);  // <-- gets individual card.
      if (!cardResponse.data.success) {  // <-- data.success is a data pair from the API.
        throw new Error("No more cards!");
      }
      console.log(cardResponse.data);
      let card = cardResponse.data.cards[0];
      this.setState(state => ({  // <-- using callback method here for setting state. This sst updates the drawn array.
        drawn: [  // <-- drawn is a new array that contains everything from the old array
          ...state.drawn,  // <-- gives all the existing data
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`
          }
        ]
      }));
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const { deck, drawn } = this.state;
    const myStyles = {
      marginLeft: '-750px',
      marginTop: '200px',
      marginBottom: '200px',
    }
    const cards = drawn.map(card => (  // <-- getting the card from the drawn array which gets the data from the API
      <Card
        key={card.id}
        name={card.name}
        image={card.image}
      />
    ))
    return (
      <div className="wow zoomIn slow">
        <div className="styleThree">
          <h1>Cards</h1>
          <Button
            onClick={this.getCard}
            variant="contained"
            color="primary"
            style={myStyles}>
            Get Card
          </Button>
          <div className="deck-container">
            {cards}
          </div>
        </div>
      </div>
    )
  }
}

export default Deck;
