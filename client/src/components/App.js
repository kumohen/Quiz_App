import React from "react";
import Question from "./Question";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "../utils/history";
import ListItem from "./ListItem";
import Result from "./Result";
import Start from "./Start";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Error from "./Auth/Error";

const App = () => {
  return (
    <div>
      <Error />
      <Router history={createHistory}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/home" component={Question} />
          <Route exact path="/item/:id" component={ListItem} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
