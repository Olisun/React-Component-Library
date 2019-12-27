import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';
import Joke from './Joke';
import './Joke.css';

class JokeList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  async componentDidMount() {
    new WOW().init();
    // API endpoint is the same as the site so you to specify headers:.... below (listed in their docs)
    let response = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    console.log(response.data.joke);
  }

  render() {
    const { propTest } = this.props;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>Dad Jokes{propTest}</h1>
        </div>
      </div>
    )
  }
}

export default JokeList;
