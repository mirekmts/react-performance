import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { setTaskState } from "./actions";

class TaskList extends React.PureComponent {
  render() {
    const { tasks, setTaskState } = this.props;

    return (
      <div className="taskList" >
          {tasks.map(({ author, text, isDone}, index) => (
            <Task
              author={author}
              text={text}
              key={index}
              isDone={isDone}
              index={index}
              onClick={setTaskState}
            />
          ))}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setTaskState: (index, isDone) => dispatch(setTaskState(index, isDone))
});

export default connect(null, mapDispatchToProps)(TaskList);
