import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import doSomethingMiddleware from "../middlewares/doSomething";

const store = createStore(reducer, applyMiddleware(doSomethingMiddleware));

export default store;
