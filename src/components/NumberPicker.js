import React, { Component } from 'react';

const randomNumber = () => {
	return Math.floor(Math.random() * 10) + 1;
};

class NumberPicker extends Component {
	render() {
		const num = randomNumber();
		return (
			<div className="styleOne">
				<h1> Your number is {num} </h1>
				<p> {num === 7 ? 'Congrats' : 'No Congrats'} </p> 
			</div>
		);
	}
}

export default NumberPicker;
