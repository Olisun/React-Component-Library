import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    new WOW().init();
    let deck = await axios.get(`${API_BASE_URL}$/new/shuffle/`);
    this.setState({
      deck: deck.data
    });
  }

  // Can't use arrow functions for async await. 
  async getCard() {
    // const { deck } = this.state;
    let id = this.state.deck.deck_id;
    let cardURL = `${API_BASE_URL}/${id}/draw/`;
    let cardResponse = await axios.get("cardURL");
    console.log(cardResponse.data);
  }

  render() {
    const { deck } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>Deck of Cards</h1>
          <Button
            onClick={this.getCard}
            variant="contained"
            color="primary"
            style={myStyles}>
            Add New Box
        </Button>
        </div>
      </div>
    )
  }
}

export default Deck;
