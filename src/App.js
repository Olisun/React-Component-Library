import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NumberPicker from './components/NumberPicker';
import Test from './components/SimpleProps';
import SlotOne from './components/Conditionals';
import Person from './components/Mapping';
import Fruits from './components/RandomFruits';
import Imagedex from './components/Avengers/Imagedex';
import State from './components/State/State';
import State2 from './components/State/State2-Button';
import State3 from './components/State/State3-Buttons';
import State4 from './components/State/State4-Object';
import MaterialTextField from './components/Forms/MaterialTextField';
import Form from './components/Forms/Form';
import BootstrapExample from './components/Forms/Form-Bootstrap'
import Lotto from './components/State/Lotto/Lotto';
import CoinContainer from './components/State/Coinflip-Exercise/CoinContainer';
import Flip from './components/FlipCard/Flip';
import BoxContainer from './components/Box-Exercise/BoxContainer';
import DiceRoll from './components/State/Dice-Exercise/DiceRoll';
import ButtonList from './components/State/Buttons-Background-Color/ButtonList';
import NumberList from './components/NumberList';
import MyDailyList from './components/Forms/MyDailyList';
import BoxList from './components/Forms/BoxList';
import ProductList from './components/Forms/ProductList';
import TodoList from './components/Forms/TodoList/TodoList';
import Hangman from './components/State/Hangman/Hangman';
import Board from './components/State/LightsOut-Exercise/Board';
import Yahtzee from './components/Yahtzee/Game';
import AjaxExp from './components/Life-Cycles/AjaxExp';



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
        <Lotto />
        <DiceRoll />
        <ButtonList />
        <NumberList />
        <Flip />
        <MaterialTextField
          field1={fieldOne}
          field2={fieldTwo}
          field3={fieldThree}
          onChange={this.handleInputChange}
        />
        <Form />
        <BootstrapExample />
        <MyDailyList />
        <BoxList />
        <ProductList />
        <CoinContainer />
        <BoxContainer />
        <TodoList />
        <Hangman />
        <Board />
        <Yahtzee />
        <AjaxExp />
        <Imagedex />
      </div>
    )
  }
}
export default App;




