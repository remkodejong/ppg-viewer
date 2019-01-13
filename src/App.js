import React, { Component } from "react";
import { Route, Switch } from "react-router";

import ShowPage from "./pagetypes/ShowPage";
import EpisodePage from "./pagetypes/EpisodePage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ShowPage} />
        <Route exact path="/episode-:season-:number" component={EpisodePage} />
      </Switch>
    );
  }
}

export default App;
