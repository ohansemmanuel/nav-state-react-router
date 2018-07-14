import { DO_SOMETHING, DO_SOMETHING_OVER } from "../constants/action-types";

export default function(state = {}, action) {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        appState: DO_SOMETHING
      };
    case DO_SOMETHING_OVER:
      return {
        appState: DO_SOMETHING_OVER
      };
    default:
      return state;
  }
}
