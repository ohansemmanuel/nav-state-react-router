import {
  TO_DO_SOMETHING,
  DO_SOMETHING,
  DO_SOMETHING_OVER
} from "../constants/action-types";

export const todoSomething = duration => ({
  type: TO_DO_SOMETHING,
  payload: duration
});

export const doSomethingOver = () => ({
  type: DO_SOMETHING_OVER
});

export const doSomething = () => ({
  type: DO_SOMETHING
});
