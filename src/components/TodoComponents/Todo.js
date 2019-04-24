//<Todo /> is a component that takes in the todo data 
// and displays the task to the screen.

import React from 'react';

const Todo = props => {
    <div className="task-info">
        <p>
          <strong>Task:</strong> {props.taskProp.task}
        </p>
    </div>
}


export default Todo;