import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="taskList">
        {tasks.map(({ author, text, isDone}, index) => (
          <Task
            author={author}
            text={text}
            key={index}
            isDone={isDone}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
