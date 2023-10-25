import { render, screen } from '@testing-library/react';
import App from './App';

test('test-react', () => {
  render(<App />);
  const list = screen.getAllByTestId('list');
  expect(list).toMatchSnapshot();
});
