import React from 'react'

const Todo = ({ text, onClick }) => (
  <div>
    <li>
      {text}
      <button onClick={onClick}>X</button>
    </li>
  </div>
)

export default Todo