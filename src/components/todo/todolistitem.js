import React from "react";
import { connect } from "react-redux";
import { acceptTODO, removeTODO } from "../../store/todoactions";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";

class ToDoItem extends React.Component {
  itemClassName = todo => {
    if (!!todo.Done) {
      return "todo-done";
    } else {
      return "todo-active";
    }
  };

  accept = todo => {
    this.props.acceptTODO(todo);
  };

  remove = todo => {
    this.props.removeTODO(todo.Id);
  };

  render() {
    const item = this.props.todo;
    const _className = this.itemClassName(item);
    return (
      <ListItem className={_className} key={item.Id} button>
        <ListItemIcon>
          <Checkbox
            onClick={() => this.accept(item)}
            edge="start"
            checked={item.Done}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": item.Id }}
          />
        </ListItemIcon>
        <ListItemText onClick={() => this.accept(item)} primary={item.Title} />
        <ListItemSecondaryAction onClick={() => this.remove(item)}>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default connect(
  null,
  { acceptTODO, removeTODO }
)(ToDoItem);
