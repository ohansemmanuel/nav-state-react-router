import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AngryDude from "./AngryDude";
import BeExcited from "./BeExcited";
import SmileLady from "./SmileLady";
import ThinkHard from "./ThinkHard";
import ThumbsUp from "./ThumbsUp";
import KeepQuiet from "./KeepQuiet";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AngryDude} />
          <Route exact path="/quiet" component={KeepQuiet} />
          <Route exact path="/smile" component={SmileLady} />
          <Route exact path="/think" component={ThinkHard} />
          <Route exact path="/thumbs" component={ThumbsUp} />
          <Route exact path="/excited" component={BeExcited} />
        </Switch>
      </Router>
    );
  }
}

export default App;
