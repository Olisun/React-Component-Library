import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { WOW } from 'wowjs/dist/wow';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
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

  handleFormSubmit = event => {
    const { firstName, lastName } = this.state;
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    const { firstName, lastName } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>
            Captured State: {firstName} {lastName}
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
            <Button
              variant="contained"
              color="primary"
              style={myStyles}
              onClick={this.handleFormSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
