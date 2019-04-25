
// - `<Todo />` is a component that takes in the `todo` data and displays 
// the task to the screen.

import React from 'react';

function Todo(props) {
    return(
        <div>
            {props.todo.task}
        </div>
    )
}
export default Todo;

