import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCounter = screen.getByTestId("count");
  expect(initialCounter).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const incrementCounter = screen.getByTestId("increment");
  const incrementedCounter = screen.getByTestId("count");
  fireEvent.click(incrementCounter);
  expect(incrementedCounter).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decrementCounter = screen.getByTestId("decrement");
  const decrementedCounter = screen.getByTestId("count");
  fireEvent.click(decrementCounter);
  expect(decrementedCounter).toHaveTextContent("-1");
});
