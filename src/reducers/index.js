import {
  DO_SOMETHING,
  DO_SOMETHING_OVER,
  DO_NOTHING
} from "../constants/action-types";

export default function(state = { appState: "" }, action) {
  console.log("Action =========> ", action);
  switch (action.type) {
    case DO_SOMETHING:
      return {
        appState: DO_SOMETHING
      };
    case DO_SOMETHING_OVER:
      return {
        appState: DO_SOMETHING_OVER
      };
    case DO_NOTHING:
      return {
        appState: DO_NOTHING
      };
    default:
      return state;
  }
}
