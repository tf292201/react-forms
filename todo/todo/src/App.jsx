import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from uuid
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const todoWithKey = { ...newTodo, id: uuidv4() }; // Assign a unique key using uuid
    setTodos([...todos, todoWithKey]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
