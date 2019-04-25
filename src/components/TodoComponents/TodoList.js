
//<TodoList /> receives your Todos array and iterates 
//over the list generating a new <Todo /> for each element in the array.

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id}
                    todo={todo}          
                />
            ))}
        </div>
    )
}


export default TodoList;


/*
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList; 
*/