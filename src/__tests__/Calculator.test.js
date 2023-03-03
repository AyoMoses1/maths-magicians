import { act } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom/extend-expect';

test('It should contain text content', () => {
  render(<Calculator />);
  const button = screen.getByText(6);
  fireEvent.click(button, { target: { value: 6 } });
  expect(button.value).toBe('6');
});

test('It renders all calculator buttons', () => {
  render(<Calculator />);
  const textElements = screen.getAllByRole('button');
  expect(textElements.length).toBe(19);
});

describe('It displays exactly what is clicked', () => {
  it('displays the value of the button clicked', () => {
    render(<Calculator />);
    const result = screen.getAllByTestId('result');
    expect(result).toBeInTheDocument;
  });

  it('displays the value of the button clicked', () => {
    render(<Calculator />);
    const result = screen.getAllByTestId('result');
    act(() => fireEvent.click(screen.getByText('6')));
    expect(result[0]).toHaveTextContent('6');
  });

  it('displays the value of the button clicked', () => {
    render(<Calculator />);
    const result = screen.getAllByTestId('result');
    act(() => fireEvent.click(screen.getByText('x')));
    expect(result[0]).toHaveTextContent('x');
  });

  it('displays the value of the button clicked', () => {
    render(<Calculator />);
    const result = screen.getAllByTestId('result');
    act(() => fireEvent.click(screen.getByText('+')));
    expect(result[0]).toHaveTextContent('+');
  });

  it('displays the value of the button clicked', () => {
    render(<Calculator />);
    const result = screen.getAllByTestId('result');
    act(() => fireEvent.click(screen.getByText('÷')));
    expect(result[0]).toHaveTextContent('÷');
  });

  it('displays the value of the button clicked', () => {
    render(<Calculator />);
    const result = screen.getAllByTestId('result');
    act(() => fireEvent.click(screen.getByText('-')));
    expect(result[0]).toHaveTextContent('-');
  });

  it('displays the value of the button clicked', () => {
    render(<Calculator />);
    const result = screen.getAllByTestId('result');
    act(() => fireEvent.click(screen.getByText('AC')));
    expect(result[0]).toHaveTextContent('');
  });
});
