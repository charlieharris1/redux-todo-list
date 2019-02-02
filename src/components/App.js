import { connect } from 'react-redux';
import React from "react";

import { fetchTodos } from '../actions';
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
 fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(null, mapDispatchToProps)(App);
