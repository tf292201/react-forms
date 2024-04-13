
import React from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList({ todos, addTodo, removeTodo }) {
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={() => removeTodo(todo.id)} />
      ))}
    </div>
  );
}

export default TodoList;