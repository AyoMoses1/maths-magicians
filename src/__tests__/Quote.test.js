import { render, screen } from "@testing-library/react";
import Quote from './../routes/Quote';


test('It should quote', () => {
  render(<Quote/>)
  const textElement = screen.getByText("Mathematics is not about numbers, equations, computations, or algorithms: It is about understanding. -William Paul Thurston")
  expect(textElement).toBeInTheDocument
})
