import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from "./Todo"

test("renders content", () => {
  const completeTodo = jest.fn()
  const deleteTodo = jest.fn()
  const view = render(<Todo todo={{text: "moro", done: "false"}} completeTodo={completeTodo} deleteTodo={deleteTodo} />)
  expect(view.container).toHaveTextContent("moro")
})