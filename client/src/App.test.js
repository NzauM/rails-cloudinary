import { render,fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';
import Newuser from './Newuser';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Render User Registration Form', () => {
  render(<Newuser/>);
  const namefield = screen.getByLabelText("Name");
  const hobbyfield = screen.getAllByLabelText("Hobby");
  const picfield = screen.getAllByLabelText("Enter profile Picture")
  expect(namefield).toBeInTheDocument();
});

test('addCustomer function submits form data', async()=>{
  const mockFetch = jest.fn(()=>Promise.resolve({ok: true}));
  globalThis.fetch = mockFetch

  render (<Newuser/>);

  // Find the form fields and fill them out
  const nameInput = screen.getByLabelText('Name');
  const hobbyInput = screen.getByLabelText('Hobby');
  const imageInput = screen.getByLabelText('Enter profile Picture');
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(hobbyInput, { target: { value: 'Soccer' } });
  fireEvent.change(imageInput, { target: { files: [new File([''], 'test.png', { type: 'image/png' })] } });


  fireEvent.submit(screen.getByTestId('customer-form'));
  await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
  
  expect(mockFetch.mock.calls[0][1].body.get('name')).toEqual('John Doe');
  expect(mockFetch.mock.calls[0][1].body.get('hobby')).toEqual('Soccer');
  expect(mockFetch.mock.calls[0][1].body.get('customer_image').name).toEqual('customer_image');
})
