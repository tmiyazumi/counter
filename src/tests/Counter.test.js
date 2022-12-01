// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  <Counter/>
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(0);

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const firstCount = screen.getByTestId('count');
  const firstCountInt = parseInt(firstCount.textContent) + 1;
  const expectCount = firstCountInt.toString();

  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(expectCount);
  
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const firstCount = screen.getByTestId('count');
  const firstCountInt = parseInt(firstCount.textContent) - 1;
  const expectCount = firstCountInt.toString();

  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(expectCount);
  
});
