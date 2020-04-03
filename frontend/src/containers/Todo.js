import { connect } from "react-redux";
import * as todoActions from "../actions/todoActions";
import Todo from "../components/Todo";

const mapStateToProps = state => {
  return {
    mappedTodoState: state.todoState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mappedFetchTodoById: todoId => dispatch(todoActions.fetchTodoById(todoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
