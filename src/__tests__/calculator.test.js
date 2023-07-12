import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import Calculator from '../calculator'

test('renders', () => {
  render(<Calculator />)
})

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton.textContent).toBe('C') // Vanilla Jest
  expect(clearButton).toHaveTextContent('C') // testing-library/jest-dom

  fireEvent.click(clearButton)
  expect(clearButton.textContent).toBe('AC') // Vanilla Jest
  expect(clearButton).toHaveTextContent('AC') // testing-library/jest-dom
})
