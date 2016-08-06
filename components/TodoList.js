import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map( (todo, i) =>
      <Todo
        key={i}
        text={todo.text}
        onClick={() => {
          onTodoClick(todo.id)
        }} />
    )}
  </ul>
)

export default TodoList