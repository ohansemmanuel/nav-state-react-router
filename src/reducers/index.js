import { DO_SOMETHING, DO_NOTHING } from "../constants/action-types";

export default function(state, action) {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        appState: DO_SOMETHING
      };
    case DO_NOTHING:
      return {
        appState: DO_NOTHING
      };
    default:
      return state;
  }
}
