import { SET_TASK_DRAFT } from "./actions";
import defaultState from "./simpleState.json";
// import defaultState from "./complexState.json";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TASK_DRAFT:
      return {
        ...state,
        taskDraft: action.taskDraft
      };
    default:
      return state;
  }
};