import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm with input field', () => {
  const mockAddTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NewTodoForm addTodo={mockAddTodo} />);
  const inputElement = getByPlaceholderText(/Enter task/i);
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.click(getByText(/Add Todo/i));
  expect(mockAddTodo).toHaveBeenCalledWith({ task: 'Test task' });
});

test('renders NewTodoForm correctly', () => {
    const { container } = render(<NewTodoForm />);
    expect(container).toMatchSnapshot();
  });