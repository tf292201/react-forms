import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';


//smoke test//
test('renders Box without crashing', () => {
  render(<Box />);
});


//snapshot test//
test('renders Box correctly', () => {
    const { container } = render(<Box />);
    expect(container).toMatchSnapshot();
  });



  test('adds a box and removes it', () => {
    const { getByText, getByLabelText } = render(<BoxList />);
    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const colorInput = getByLabelText('Background Color:');
    const addButton = getByText('Add a new box!');
  
    // Add a new box
    fireEvent.change(widthInput, { target: { value: '50' } });
    fireEvent.change(heightInput, { target: { value: '50' } });
    fireEvent.change(colorInput, { target: { value: 'red' } });
    fireEvent.click(addButton);
  
    // Verify that the box is added
    expect(getByText('Remove the box!')).toBeInTheDocument();
  
    // Remove the box
    fireEvent.click(getByText('Remove the box!'));
  
    // Verify that the box is removed
    expect(queryByText('Remove the box!')).not.toBeInTheDocument();
  });