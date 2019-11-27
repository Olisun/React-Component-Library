import React, { Component } from 'react';
import { borderRadius } from '@material-ui/system';

class SlotOne extends Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = (s1 === s2) && (s2 === s3);
    const hungry = this.props.isHungry;
    const styles = {
      color: 'blue',
      border: '1px solid black',
			backgroundColor: 'white',
			marginLeft: '50px',
			marginRight: '50px',
			paddingLeft: '10px',
      paddingRight: '10px',
      boxShadow: '7px 10px 5px -3px rgba(0, 0, 0, 0.56)',
      borderRadius: '10px'
		}

    return (
      <div style={styles}>
        <h1>Slot Machine</h1>
        <h1>{s1} {s2} {s3}</h1>
        <h1 className={winner ? 'winner' : 'loser'}
          >{winner ? "Your Won" : "You Lost"}</h1>
        <p>Is Hungry? {hungry ? "Foo-Foo-Time" : "Not Foo-Foo-Time"}</p>
      </div>
    );
  }
}

export default SlotOne;