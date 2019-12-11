import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { WOW } from 'wowjs/dist/wow';
import "./Hangman.css";
import img0 from "./images/0.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    words: ["apple", "orange", "wiggly", "kitty", "crazy"]
  };

  componentDidMount() {
    new WOW().init()
  }

  randomWord = () => {
    const { words } = this.props;
    return words[Math.floor(Math.random() * words.length)];
  }

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: this.randomWord()
    };
  }

  reset = () => {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: this.randomWord()
    });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    const { answer, guessed } = this.state
    return answer
      .split("")
      .map(ltr => (guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = (evt) => {
    let ltr = evt.target.value;
    this.setState(state => ({
      guessed: state.guessed.add(ltr),
      nWrong: state.nWrong + (state.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    const { guessed } = this.state
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const { images, maxWrong } = this.props
    const { answer, nWrong } = this.state
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100px',
      backgroundColor: 'blue',
      boxShadow: 'none'
    }
    let gameOver = nWrong >= maxWrong;
    const altText = `${nWrong}/${maxWrong}`
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <div className='Hangman'>
            <h1>Hangman</h1>
            <img src={images[nWrong]} alt={altText} />
            <p>Incorrect Guesses: {nWrong}</p>
            <p className='Hangman-word'>
              {!gameOver ? this.guessedWord() : answer}</p>
            <p className='Hangman-btns'>
              {!gameOver ?
                this.generateButtons()
                : `You lose. Game is Over!`}
            </p>

            <Button
              onClick={this.reset}
              variant="contained"
              color="primary"
              style={myStyles}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hangman;
