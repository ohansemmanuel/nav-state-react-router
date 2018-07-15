import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import store from "./store";
import history from "./store/history";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

window.store = store;
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
