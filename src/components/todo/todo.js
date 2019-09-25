import React from "react";
import { connect } from "react-redux";
import {
  acceptTODO,
  editTODO,
  addTODO,
  removeTODO
} from "../../store/todoactions";

import AddTodo from "./addtodo";
import ToDoList from "./todolist";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <div>
          <ToDoList />
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  {
    acceptTODO,
    editTODO,
    addTODO,
    removeTODO
  }
)(Todo);
