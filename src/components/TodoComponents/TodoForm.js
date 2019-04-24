/* <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or 
click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo. */

import React from 'react';

// Making forms "controlled components"
// 1. add a property on state that controls each input
// 2. On the input, add a "value" attribute - pass in the state property to the value attr
// 3. Add onChange, and pass in the change handler function
// 4. on the input, add a "name" attr that is the same as the state property that is controlling that input



const TodoForm = props => {
  return (
      <div>
        <form>
            <input 
                type="text";
                value={props.task}
                name="name"
                placeholder="Todo"
                onChange={props.handleChanges}
            />
        </form>
        <button onClick={props.updateList}>Add Todo</button>
        <button onClick={props.clearList}>Clear Completed</button>
      </div>

  );
};

export default TodoForm;