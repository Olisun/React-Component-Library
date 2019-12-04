import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class FormListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      type: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const { addTodo } = this.props;
    event.preventDefault();
    addTodo(this.state);
    this.setState({
      name: "",
      type: ""
    })
  }

  render() {
    const { name, type } = this.state
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <form>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <label htmlFor="type">Type: </label>
        <input
          id="type"
          name="type"
          value={type}
          onChange={this.handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          style={myStyles}
          onClick={this.handleFormSubmit}>
          Add New Thingy
        </Button>
      </form>
    )
  }
}

export default FormListForm
