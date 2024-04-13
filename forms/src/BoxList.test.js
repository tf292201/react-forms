import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';


//smoke test//
test('renders BoxList without crashing', () => {
  render(<BoxList />);
});


//snapshot test//
test('renders BoxList correctly', () => {
    const { container } = render(<BoxList />);
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