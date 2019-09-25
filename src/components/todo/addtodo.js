import React from "react";
import { connect } from "react-redux";
import { addTODO } from "../../store/todoactions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    if (!this.state.input) return;
    this.props.addTODO(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            id="standard-name"
            label="Todo item"
            value={this.state.input}
            onChange={e => this.updateInput(e.target.value)}
            margin="normal"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleAddTodo}
          className="add-todo"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTODO }
)(AddTodo);
