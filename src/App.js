import React from "react";
import { connect } from "react-redux";

import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import UserBar from "./UserBar";

class App extends React.Component {
  render() {
    const { tasks, taskDraft, setTaskState } = this.props;
    return (
      <div className="app">
        <UserBar />
        <TaskList tasks={tasks} onClick={setTaskState} />
        <TaskInput hasText={Boolean(taskDraft)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  taskDraft: state.taskDraft
});

export default connect(mapStateToProps, null)(App);
