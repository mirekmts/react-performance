export const SET_TASK_DRAFT = "SET_TASK_DRAFT";
export const SET_TASK_STATE = "SET_TASK_STATE";

export const setTaskDraft = text => ({
  type: SET_TASK_DRAFT,
  taskDraft: text
});

export const setTaskState = (index, isDone) => ({
  type: SET_TASK_STATE,
  index,
  isDone,
});