import React from 'react';

function Todo({ todo, removeTodo }) {
  return (
    <div>
      <div>{todo.task}</div>
      <button onClick={removeTodo}>X</button>
    </div>
  );
}

export default Todo;