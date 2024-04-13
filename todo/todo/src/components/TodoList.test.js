import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders NewTodoForm in TodoList', () => {
  const mockAddTodo = jest.fn();
  const { getByPlaceholderText } = render(<TodoList todos={[]} addTodo={mockAddTodo} />);
  const inputElement = getByPlaceholderText(/Enter task/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders todos in TodoList', () => {
  const mockTodos = [
    { id: '1', task: 'Test todo 1' },
    { id: '2', task: 'Test todo 2' },
  ];
  const { getByText } = render(<TodoList todos={mockTodos} />);
  const todoElement1 = getByText(/Test todo 1/i);
  const todoElement2 = getByText(/Test todo 2/i);
  expect(todoElement1).toBeInTheDocument();
  expect(todoElement2).toBeInTheDocument();
});

test('renders no todos in TodoList', () => {
  const { queryByText } = render(<TodoList todos={[]} />);
  const todoElement = queryByText(/Test todo/i);
  expect(todoElement).not.toBeInTheDocument();
});

