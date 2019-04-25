/*- `<App />` will hold all the data needed for this project. It will
 also be the container for your Todo Components.
  - All of your application data will be stored here on `<App />`.
  - All of your `handler` functions should live here on `<App />`.*/

import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = x => {
    x.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() }
    this.setState({
      todos: [this.state.todos, newTodo],
      todo: ''
    });
  }



  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <TodoList
          todos={this.state.todos}
          handleToggleComplete={this.toggleTodoComplete}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
