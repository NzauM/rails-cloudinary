import { render, screen } from '@testing-library/react';
import App from './App';
import Newuser from './Newuser';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Render User Registration Form',() => {
  render(<Newuser/>);
  const namefield = screen.getAllByLabelText("Name");
  const hobbyfield = screen.getAllByLabelText("Hobby");
  const picfield = screen.getAllByLabelText("Enter profile Picture")
  expect(namefield, hobbyfield, picfield).toBeInTheDocument();
})
