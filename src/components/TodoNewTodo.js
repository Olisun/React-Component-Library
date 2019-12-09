import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import uuid from "uuid/v4";

class TodoNewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = event => {
    const { createTodo } = this.props;
    const newTodo = { ...this.state, key: uuid(), id: uuid() };
    event.preventDefault();
    createTodo(newTodo);
    this.setState({
      task: ""
    })
  }

  render() {
    const { task } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    return (
      <form>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="new todo"
          id="task"
          name="task"
          value={task}
          onChange={this.handleInputChange}
        />
        <Button
          onClick={this.handleClick}
          variant="contained"
          color="primary"
          style={myStyles}>
          Add Todo
        </Button>
      </form>
    )
  }
}

export default TodoNewTodo;
