import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/todos/:id" component={Todo} />
        </Switch>
      </div>
    );
  }
}

export default App;
