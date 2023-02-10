import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <div>
      {todos.map((todo, i) => 
        <Todo key={i} todo={todo} completeTodo={onClickComplete} deleteTodo={onClickDelete}/>
      ).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </div>
  )
}

export default TodoList
