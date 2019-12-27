import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';
import Joke from './Joke';
import './Joke.css';

class JokeList extends Component {
  static defaultProps = {
    numberOfJokes: 10
  }

  constructor(props) {
    super(props)
    this.state = {
      jokes: []
    }
  }

  async componentDidMount() {
    const { numberOfJokes } = this.props;
    new WOW().init();
    let jokes = [];
    // Getting 10 jokes from the API. Using while loop instead of for loop to avoid duplicate jokes retrieved from the API. 
    while (jokes.length < numberOfJokes) {
      // API endpoint is the same as the site so you to specify headers:.... below (listed in their docs)
      let response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
      jokes.push(response.data.joke);
    }
    console.log(jokes);
    this.setState({
      jokes: jokes
    })
  }

  render() {
    const { propTest } = this.props;
    const { jokes } = this.state;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <div className="JokeList">
            <h1>Dad Jokes</h1>
            <div className="JokeList-Jokes">
              {jokes.map(joke => (
                <div>{joke}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JokeList;
