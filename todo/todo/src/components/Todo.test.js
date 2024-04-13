import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';


////smoke test//////
test('renders Todo component', () => {
  const mockTodo = { id: '1', task: 'Test todo' };
  const mockRemoveTodo = jest.fn();
  const { getByText } = render(<Todo todo={mockTodo} removeTodo={mockRemoveTodo} />);
  const todoElement = getByText(/Test todo/i);
  expect(todoElement).toBeInTheDocument();
});

//snapshot test//   
test('renders Todo correctly', () => {
    const mockTodo = { id: '1', task: 'Test todo' };
    const { container } = render(<Todo todo={mockTodo} />);
    expect(container).toMatchSnapshot();
  }
);