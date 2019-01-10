import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ShowPage from "./pagetypes/ShowPage";
import EpisodePage from "./pagetypes/EpisodePage";

class App extends Component {
  // componentDidMount() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ShowPage} />
          <Route path="/episode/:season-:number" component={EpisodePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
