import React, { Component } from 'react'
import { WOW } from 'wowjs/dist/wow';
import uuid from "uuid/v4";
import FormListForm from './FormListForm';

class FormList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { name: "Udemy", type: "Coding", id: uuid() },
        { name: "Walking Time", type: "Wiggly", id: uuid() },
        { name: "Peanut Time", type: "Eating", id: uuid() },
        { name: "More Coding", type: "Coding", id: uuid() }
      ]
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }));
  }

  renderTodos = () => {
    const { todos } = this.state
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            Name of Thingy: {todo.name}, Type of Thingy: {todo.type}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <h1>My Daily List</h1>
          {this.renderTodos()}
          <FormListForm addTodo={this.addTodo} />
        </div>
      </div>
    )
  }
}

export default FormList;