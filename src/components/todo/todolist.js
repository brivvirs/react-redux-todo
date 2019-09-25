import React from "react";
import { connect } from "react-redux";
import ToDoItem from "./todolistitem";
import List from "@material-ui/core/List";

class ToDoList extends React.Component {
  accept = todo => {
    this.props.acceptTODO(todo);
  };

  render() {
    return (
      <List component="nav" aria-label="secondary mailbox folders">
        {this.props.todos &&
          this.props.todos.map(todo => {
            return <ToDoItem key={todo.Id} todo={todo} />;
          })}
      </List>
    );
  }
}

const mapStateToProps = todo => {
  let toReturn;
  if (!todo) {
    toReturn = { todos: [] };
  } else {
    toReturn = { todos: todo };
  }
  return toReturn;
};

export default connect(
  mapStateToProps,
  null
)(ToDoList);
