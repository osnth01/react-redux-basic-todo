import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => (
  <ul>
    {todos.map( (todo, i) =>
      <Todo
        key={i}
        text={todo} />
    )}
  </ul>
)

export default TodoList