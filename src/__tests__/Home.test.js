import { render, screen } from "@testing-library/react";
import Home from './../routes/Home';

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