import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

it('renders correctly', () => {
  const tree = renderer.create(<MockNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Navbar tests', () => {
  test('It should contain text content', () => {
    render(<MockNavbar />);
    const textElement = screen.getAllByTestId('Home');
    expect(textElement.length).toBe(1);
  });

  test('It should be visible to the user', () => {
    render(<MockNavbar />);
    const textElement = screen.getAllByRole('list');
    expect(textElement[0]).toBeVisible();
  });
});

describe('tests all nav links', () => {
  test('It Contains Calculator Navlink', () => {
    render(<MockNavbar />);
    const textElement = screen.getAllByTestId('Calculator');
    expect(textElement.length).toBe(1);
  });

  test('It Contains Quote Navlink', () => {
    render(<MockNavbar />);
    const textElement = screen.getAllByTestId('Quote');
    expect(textElement.length).toBe(1);
  });

  test('It Contains Home Navlink', () => {
    render(<MockNavbar />);
    const textElement = screen.getAllByTestId('Home');
    expect(textElement.length).toBe(1);
  });

  test('It Contains Home Navlink', () => {
    render(<MockNavbar />);
    const navlinks = document.querySelectorAll('li a');
    expect(navlinks.length).toBe(3);
  });
});
