export const SET_TASK_DRAFT = "SET_TASK_DRAFT";

export const setTaskDraft = text => ({
  type: SET_TASK_DRAFT,
  taskDraft: text
});
