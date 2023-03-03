import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Result from '../components/Result';
import '@testing-library/jest-dom';

it('renders correctly', () => {
  const state = { total: 2, next: '3', operation: '+' };
  const tree = renderer.create(
    <Result
      total={state.total}
      next={state.next}
      operation={state.operation}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('The Result component renders the same content passed into total, next and operation prop', () => {
  const state = { total: 2, next: '3', operation: '+' };
  render(<Result total={state.total} next={state.next} operation={state.operation} />);
  const displayedContent = screen.getByText('2 + 3');
  expect(displayedContent).toBeInTheDocument();
});
