import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { WOW } from 'wowjs/dist/wow';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      number1: 0,
      number2: 0
    };
  }

  componentDidMount() {
    new WOW().init()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  calculate = () => {
    const { number1, number2 } = this.state;
    let numberOne = parseInt(number1);
    let numberTwo = parseInt(number2);
    let sum = numberOne + numberTwo;
    this.setState({
      number1: numberOne,
      number2, numberTwo,
      sum: sum
    })
  }

  handleFormSubmit = event => {
    const { firstName, lastName, number1, number2 } = this.state;
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    this.calculate();
    this.setState({
      firstName: "",
      lastName: "",
      number1: "",
      number2: ""
    });
  };

  render() {
    const { firstName, lastName, number1, number2 } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    // let num1 = number1
    // console.log(num1)
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    let sum = num1 + num2;
    console.log(sum)

    return (
      < div className="wow zoomIn slow" >
        <div className="styleOne">
          <h1>
            Captured State: {firstName} {lastName} Plus Sum: {sum}
          </h1>
          <form className="form">
            <input
              value={firstName}  // <-- value is the important prop!
              name="firstName"  // <-- name is needed for handleInputChange to work!
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastName}  // <-- value is the important prop!
              name="lastName"  // <-- name is needed for handleInputChange to work!
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={parseInt(number1)}  // <-- value is the important prop!
              name="number1"  // <-- name is needed for handleInputChange to work!
              onChange={this.handleInputChange}
              type="number"
            />
            <input
              value={number2}  // <-- value is the important prop!
              name="number2"  // <-- name is needed for handleInputChange to work!
              onChange={this.handleInputChange}
              type="number"
            />
            <Button
              variant="contained"
              color="primary"
              style={myStyles}
              onClick={this.handleFormSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </div >
    );
  }
}

export default Form;
