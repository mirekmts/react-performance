import { SET_TASK_DRAFT, SET_TASK_STATE } from "./actions";
import defaultState from "./simpleState.json";
// import defaultState from "./complexState.json";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TASK_DRAFT:
      return {
        ...state,
        taskDraft: action.taskDraft
      };
    case SET_TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index
            ? { ...task, isDone: action.isDone }
            : task
        )
      };
    default:
      return state;
  }
};