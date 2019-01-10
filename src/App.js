import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import ShowPage from "./components/ShowPage";
import EpisodePage from "./components/EpisodePage";

class App extends Component {
  // componentDidMount() {}

  render() {
    return (
      <Router>
        <main className="App">
          <Route exact path="/" component={ShowPage} />
          <Route path="/episode/:season-:number" component={EpisodePage} />
        </main>
      </Router>
    );
  }
}

export default App;
