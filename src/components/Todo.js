import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Todo extends Component {
  constructor(props) {
    super(props)
    const { task } = this.props;
    this.state = {
      isEditing: false,
      task: task
    }
  }

  toggleForm = () => {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleRemove = () => {
    const { removeTodo, id } = this.props
    removeTodo(id);
  }

  handleUpdate = event => {
    const { updateTodo, id } = this.props;
    const { task } = this.state;
    event.preventDefault();
    updateTodo(id, task);
    this.setState({
      isEditing: false
    });
  }

  render() {
    const { task, removeTodo } = this.props;
    const { isEditing } = this.state;
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    let result;
    if (isEditing) {
      result = (
        <div>
          <form>
            <input
              type="text"
              name="task"
              value={this.state.task}  // <-- can't destruct this because it's already being destructed by this.props.
              onChange={this.handleInputChange}
            />
            <Button
              onClick={this.handleUpdate}
              variant="contained"
              color="primary"
              style={myStyles}>
              Update
            </Button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          {task}
          <Button
            onClick={this.toggleForm}
            variant="contained"
            color="primary"
            style={myStyles}>
            Edit
          </Button>
          <Button
            onClick={this.handleRemove}
            variant="contained"
            color="primary"
            style={myStyles}>
            Remove
        </Button>
        </div>
      )
    }
    return result;
  }
}

export default Todo;
