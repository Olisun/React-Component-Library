import React, { Component } from 'react'
import uuid from "uuid/v4";
import { WOW } from 'wowjs/dist/wow';
import Todo from './Todo';
import TodoNewTodo from './TodoNewTodo';
import './Todo.css';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          task: "Coding time",
          key: uuid(),
          id: uuid()
        },
        {
          task: "Jogging time",
          key: uuid(),
          id: uuid()
        }
      ]
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  createTodo = (newTodo) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo]
    })
  }

  removeTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  updateTodo = (id, updatedTask) => {
    const { todos } = this.state;
    // For each todo, check if that dod's task is being updated (via button click). If so, add the updated task to the todos array. If not return the same todo.
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask }
      }
      return todo;
    })
    this.setState({
      todos: updatedTodos
    });
  }

  crossOutTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    })
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    const { todos, todo } = this.state
    const myStyles = {
      marginLeft: '10px',
      marginTop: '5px',
      marginBottom: '10px',
    }
    const Todos = this.state.todos.map(todo => {
      return (
        <Todo
          task={todo.task}
          id={todo.id}
          key={todo.key}
          completed={todo.completed}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
          crossOutTodo={this.crossOutTodo}
        />
      )
    })
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          <div className="background">
            <div className="TodoList">
              <h1>My Todo List</h1>
              <ul>
                {Todos}
              </ul>
              <TodoNewTodo className="TodoList"
                createTodo={this.createTodo}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;
