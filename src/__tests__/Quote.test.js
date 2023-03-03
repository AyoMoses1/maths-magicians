import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Quote from '../routes/Quote';

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('It should quote', () => {
  render(<Quote />);
  const textElement = screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: It is about understanding. -William Paul Thurston');
  expect(textElement).toBeInTheDocument();
});
