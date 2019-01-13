import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import createHistory from "history/createBrowserHistory";
import { Provider as StateProvider } from "unstated";

import "./index.css";
import App from "./App";

const history = createHistory();

ReactDOM.render(
  <StateProvider>
    <Router history={history}>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById("root")
);
