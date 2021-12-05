import { render, screen } from '@testing-library/react';
import { MarketerUI } from './MarketerUI';

test('renders learn react link', () => {
  render(<MarketerUI />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
