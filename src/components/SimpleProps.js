import React, { Component } from 'react';


class Test extends Component {
	render() {
    const styles = {
      border: '1px solid black',
			backgroundColor: 'white',
			marginLeft: '50px',
			marginRight: '50px',
			marginTop: '60px',
			marginBottom: '60px',
			paddingLeft: '10px',
      paddingRight: '10px',
			boxShadow: '7px 10px 5px -3px rgba(0, 0, 0, 0.56)',
      borderRadius: '10px'
		}

		const { to, from, data, number, isHunrgy } = this.props;

		return (
			<div style={styles}>
				<h1>Hello {to} from {from}</h1>
				<p>Data: {data}</p>
				<p>Number: {number}</p>
			</div>
		);
	}
}

export default Test;