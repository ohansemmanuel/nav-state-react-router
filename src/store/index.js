import { createStore, applyMiddleware } from "redux";
import history from "./history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reducer from "../reducers";

const store = createStore(
  connectRouter(history)(reducer),
  applyMiddleware(routerMiddleware(history))
);

export default store;
