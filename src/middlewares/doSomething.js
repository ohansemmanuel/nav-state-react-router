import { doSomething, doSomethingOver } from "../actions";
import { TO_DO_SOMETHING } from "../constants/action-types";

const doSomethingMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== TO_DO_SOMETHING) {
    next(action);
    return;
  }

  //Do something!
  dispatch(doSomething());

  //wait for sometime, and then do nothing!
  setTimeout(() => {
    dispatch(doSomethingOver());
  }, action.payload || 3000);
};

export default doSomethingMiddleware;
