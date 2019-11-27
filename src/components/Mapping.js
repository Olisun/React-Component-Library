import React, { Component } from 'react';
import { fontSize } from '@material-ui/system';

class Person extends Component {
  static defaultProps = {
    favFood: 'Korean Fried Chicken'
  }

  render() {
    const { name, hobbies, favFood } = this.props;
    const styles = {
      color: 'blue',
      backgroundColor: 'white',
    }
    
    return (
      <div className="styleOne">
        <h1>My Name is: {name}</h1>
        <h2 style={styles}>My Fave Food is: {favFood}</h2>
        <h2>My hobbies are:</h2>
        <ul>
          {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
      </div>
    );
  }
}

export default Person;