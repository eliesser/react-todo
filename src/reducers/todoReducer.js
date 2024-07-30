export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];
    case '[TODO] Edit Todo': {
      return initialState.map((todo) => {
        let description = todo.description;

        if (todo.id === action.payload.id)
          description = action.payload.description;

        return {
          ...todo,
          description
        }
      });
    }

    case '[TODO] Remove Todo':
      return initialState.filter((todo) => todo.id !== action.payload);

    case '[TODO] Toggle Done Todo': {
      const updatedTodo = action.payload;
      const isTodoDone = updatedTodo.done;

      const filteredTodos = initialState.filter(todo => todo.id !== updatedTodo.id);

      if (isTodoDone) {
        return [...filteredTodos, updatedTodo];
      } else {
        return [updatedTodo, ...filteredTodos];
      }
    }

    default:
      return initialState;
  }
};
