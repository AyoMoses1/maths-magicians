import { render, screen } from "@testing-library/react";
import Home from './../routes/Home';
import renderer  from 'react-test-renderer';


it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Home page tests', () => {
  test('It displays heading', () => {
    render(<Home/>)
    const textElement = screen.getByRole("heading")
    expect(textElement).toBeInTheDocument
  })
  
  test('It renders all paragraph', () => {
    render(<Home/>)
    const paragraphs = document.querySelectorAll('p')
    expect(paragraphs.length).toBe(2)
  })
})