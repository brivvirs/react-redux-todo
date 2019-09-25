import { ACCEPT_TODO, ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actionstype";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const addTODO = (title, content) => {
  let playload = {
    Id: uuidv4(),
    Title: title,
    Content: content,
    Done: false
  };
  return {
    type: ADD_TODO,
    payload: playload
  };
};

export const acceptTODO = id => {
  return {
    type: ACCEPT_TODO,
    payload: id
  };
};

export const editTODO = todoItem => {
  return {
    type: EDIT_TODO,
    payload: todoItem
  };
};

export const removeTODO = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};
