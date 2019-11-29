import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import NumberItem from './NumberItem';

// Passing state and props down to the child and the child passing state back up to the parent

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  Remove = (number) => {
    this.setState(state => ({
      numbers: state.numbers.filter(num => num !== number)
    }))
  }

  render() {
    const { numbers } = this.state;
    let numberList = numbers.map(number => (
      <NumberItem
        value={number}
        remove={this.Remove}
      />
    ))
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>Number List</h1>
          <ul>{numberList}</ul>
        </div>
      </div>
    )
  }
}

export default NumberList
