const todos = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [
      ...state,
      {
        text: action.text
      }
    ]
  }
  return state
}

export default todos