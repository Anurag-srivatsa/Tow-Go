import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Wrap App in Router for routing context
import App from './App.js';

test('renders MainPage content', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Adjust this to match any specific content in your MainPage component
  const mainHeading = screen.getByText(/welcome to Tow-Go/i);
  expect(mainHeading).toBeInTheDocument();
});
