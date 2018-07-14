import {
  TO_DO_SOMETHING,
  DO_SOMETHING,
  DO_NOTHING
} from "../constants/action-types";

export const todoSomething = duration => ({
  type: TO_DO_SOMETHING,
  payload: duration
});

export const doNothing = () => ({
  type: DO_NOTHING
});

export const doSomething = () => ({
  type: DO_SOMETHING
});
