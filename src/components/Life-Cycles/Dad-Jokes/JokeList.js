import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import axios from 'axios';
import uuid from "uuid/v4";
import Joke from './Joke';
import './JokeList.css';

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
      jokes.push({
        id: uuid(),
        text: response.data.joke,
        votes: 0
      });
    }
    console.log(jokes);
    this.setState({
      jokes: jokes
    })
  }

  handleVote = (id, delta) => {
    // Using callback method. Setting state to the old state first ad for each joke, is the id equal to the joke that was passed in. If it is, return the existing joke but set the votes to be current votes plus the change (delta) else return joke (unchanged joke)
    this.setState(state => ({
      jokes: state.jokes.map(joke =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke)
    }))
  }

  render() {
    const { propTest } = this.props;
    const { jokes } = this.state;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <div className="App-Container">
            <div className="JokeList">
              <div className="JokeList-Sidebar">
                <h1 className="JokeList-Title">
                  <span>Dad</span> Jokes
                </h1>
                <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                <button className="get-more">New Jokes</button>
              </div>
              <div className="JokeList-Jokes">
                {jokes.map(joke => (
                  <Joke
                    key={joke.id}
                    votes={joke.votes}
                    text={joke.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JokeList;
