import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../actions/todoActions";

const Todos = props => {
  const store = useSelector(state => state.todoState);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = dispatch(fetchTodos());
  }, []);
  return <div>Hello</div>;
};

export default Todos;
