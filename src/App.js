import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NumberPicker from './components/NumberPicker';
import Test from './components/SimpleProps';
import SlotOne from './components/Conditionals';
import Person from './components/Mapping';
import Fruits from './components/RandomFruits';
import Imagedex from './components/Imagedex';
import State from './components/State';
import State2 from './components/State2-Button';
import State3 from './components/State3-Buttons';
import State4 from './components/State4-Object';
import Text from './components/TextField';
import Form from './components/Form';
import Example from './components/Form-Bootstrap'
import State5 from './components/State5-Lottery';
import CoinContainer from './components/CoinContainer';
import Flip from './components/Flip';
import BoxContainer from './components/BoxContainer';
import DiceRoll from './components/DiceRoll';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldOne: "",
      fieldTwo: "",
      fieldThree: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTextChange = event => {
    event.preventDefault();
    if (this.state.fieldOne && this.state.fieldTwo && this.state.fieldThree) {
      this.setState(
        {
          fieldOne: this.state.fieldOne,
          fieldTwo: this.state.fieldTwo,
          fieldThree: this.state.fieldThree
        }
      )
    }
  }

  render() {
    const { fieldOne, fieldTwo, fieldThree } = this.state;
    return (
      <div className="App">
        <Test
          to="Wiggly"
          from="Oliver"
          data={['Cat, ', 'Dog, ', 'Wiggly, ', 'Crazy-Kitty']}
          number={Math.floor(Math.random() * 10) + 1}
          isHungry={true}
        />
        <SlotOne
          s1="🥩"
          s2="🎸"
          s3="💔"
        />
        <SlotOne
          s1="💔"
          s2="💔"
          s3="💔"
        />
        <Person
          name="Oliver"
          hobbies={['Jogging', 'Coding', 'Guitar Playing', 'Eating', 'Web Dev']}
        />
        <Person
          name="Wiggly"
          hobbies={['Jogging-time', 'Ball-Ball-Playtime', 'Sleeping', 'Eating', 'Giant Sthnaakie']}
        />
        <NumberPicker />
        <Fruits />
        <State
          maxNumber={10}
        />
        <State2 />
        <State3 />
        <State4 />
        <State5 />
        <DiceRoll />
        <Flip />
        <Text
          field1={fieldOne}
          field2={fieldTwo}
          field3={fieldThree}
          onChange={this.handleInputChange}
        // onChange={this.handleTextChange}
        />
        <Form />
        <Example />
        <CoinContainer />
        <BoxContainer />
        <Imagedex />
      </div>
    )
  }
}
export default App;




