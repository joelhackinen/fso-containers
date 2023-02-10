const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const doneInfo = (
    <div>
      <span>This todo is done</span>
      <span>
        <button onClick={deleteTodo(todo)}> Delete </button>
      </span>
    </div>
  )

  const notDoneInfo = (
    <div>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={deleteTodo(todo)}> Delete </button>
        <button onClick={completeTodo(todo)}> Set as done </button>
      </span>
    </div>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default Todo