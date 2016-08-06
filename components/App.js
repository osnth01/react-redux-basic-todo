import React from 'react'
import TodoListContainer from '../containers/TodoListContainer'
import AddTodoContainer from '../containers/AddTodoContainer'

const App = () => (
  <div>
    <h1>Hello</h1>
    <AddTodoContainer />
    <TodoListContainer />
  </div>
)

export default App