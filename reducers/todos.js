const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'DELETE_TODO':
      let deleteIndex
      state.forEach((todo, index) => {
        if (todo.id === action.id) {
          deleteIndex = index
        }
      });
      return (state.slice(0, deleteIndex))
        .concat(state.slice(deleteIndex+1, state.length))
    default:
      return state
  }
}

export default todos