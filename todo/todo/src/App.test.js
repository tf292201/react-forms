import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

//////smoke test/////////   
test('renders Todo App header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Todo App/i);
  expect(headerElement).toBeInTheDocument();
});

///snapshot test/////
test('renders App correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  }
);


//////////integration test////////
test('adds a todo and removes it', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText('Enter task...');
  const addButton = getByText('Add Todo');

  // Add a new todo
  fireEvent.change(input, { target: { value: 'New todo' } });
  fireEvent.click(addButton);

  // Verify that the todo is added
  expect(getByText('New todo')).toBeInTheDocument();

  // Remove the todo
  fireEvent.click(getByText('X'));

  // Verify that the todo is removed
  expect(queryByText('New todo')).not.toBeInTheDocument();
});