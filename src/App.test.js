import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Resollect Finance Dashboard header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Resollect Finance Dashboard/i);
  expect(headerElement).toBeInTheDocument();
});

