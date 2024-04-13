import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';


//smoke test//
test('renders NewBoxForm without crashing', () => {
  render(<NewBoxForm />);
});


//snapshot test//
test('renders NewBoxForm correctly', () => {
    const { container } = render(<NewBoxForm />);
    expect(container).toMatchSnapshot();
  });

  