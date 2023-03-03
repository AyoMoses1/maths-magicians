import { render, screen } from "@testing-library/react";
import CalculatorRoute from '../routes/Calculator';


test('It should contain text content', () => {
  render(<CalculatorRoute/>)
  const textElement = screen.getByText("Lets do some Maths")
  expect(textElement).toBeInTheDocument
})

test('It renders all calculator buttons', () => {
  render(<CalculatorRoute/>)
  const textElements = screen.getAllByRole("button")
  expect(textElements.length).toBe(19)
})
