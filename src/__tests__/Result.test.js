import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Result from '../components/Result';

it('renders correctly', () => {
  const tree = renderer.create(<Result />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('The Result component renders the same content passed into total, next and operation prop', () => {
  const state = { total: 2, next: '3', operation: '+' };
  render(<Result total={state.total} next={state.next} operation={state.operation} />);
  const displayedContent = screen.getByText('2 + 3');
  expect(displayedContent).toBeInTheDocument;
});

// it('gets the correct HTML element', () => {
//   const state = {total: 2, next: '3', operation : "+" }
//   render(<Result total={state.total} next={state.next} operation={state.operation}/>)
//   const displayedContent = screen.getByText('2 + 3')
//   expect(displayedContent).toBeInTheDocument
// })

// it('The Result component renders the same content passed into total, next and operation prop', () => {
//   const state = {total: 2, next: '3', operation : "+" }
//   render(<Result total={state.total} next={state.next} operation={state.operation}/>)
//   const displayedContent = screen.getByText('2 + 3')
//   expect(displayedContent).toBeInTheDocument
// })

// it('The Result component renders the same content passed into total, next and operation prop', () => {
//   const state = {total: 2, next: '3', operation : "+" }
//   render(<Result total={state.total} next={state.next} operation={state.operation}/>)
//   const displayedContent = screen.getByText('2 + 3')
//   expect(displayedContent).toBeInTheDocument
// })

// it('The Result component renders the same content passed into total, next and operation prop', () => {
//   const state = {total: 2, next: '3', operation : "+" }
//   render(<Result total={state.total} next={state.next} operation={state.operation}/>)
//   const displayedContent = screen.getByText('2 + 3')
//   expect(displayedContent).toBeInTheDocument
// })
