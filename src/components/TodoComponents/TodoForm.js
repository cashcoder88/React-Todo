// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` 
// buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` 
//   or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo. *

import React from 'react';

const TodoForm = (props) => {
    return (
    <div>
        <form>
          <input 
              name="todo"
              placeholder="Add Todo"
              type="text"
              value={props.value}
              onChange={props.changeTodo}
          />
          <button onClick={props.addTodo}>Add</button>
          <button onClick={props.clearComplete}>Clear</button>
        </form>
    </div> 
  )
}
export default TodoForm;

