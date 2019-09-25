import React from "react";
import "./App.css";
import Todo from "./components/todo/todo";
import Container from '@material-ui/core/Container';

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Todo />
      </Container>
    );
  }
}
export default App;
