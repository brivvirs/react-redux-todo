import { ACCEPT_TODO, EDIT_TODO, REMOVE_TODO, ADD_TODO } from "../actionstype";

const initialForm = {
  Id: 1,
  Title: "hello",
  Content: "Hello world!",
  Done: false
};

const TODOReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let toReturn;
      if (!state) {
        toReturn = [action.payload];
      } else {
        toReturn = [...state, action.payload];
      }
      return toReturn;
    }
    case REMOVE_TODO: {
      return state.filter(x => x.Id !== action.payload);
    }
    case EDIT_TODO: {
      let index = state.findIndex(x => x.Id === action.payload.Id);
      state[index] = action.payload;
      return state;
    }
    case ACCEPT_TODO: {
      let index = state.findIndex(x => x.Id === action.payload.Id);
      state[index].Done = !state[index].Done;
      state[index] = { ...state[index] };
      return [...state];
    }
    default: {
      return state;
    }
  }
};

export default TODOReducer;
