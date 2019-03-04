import * as React from "react";
import { connect } from "react-redux";
import { setTaskDraft } from "./actions";

class TaskInput extends React.Component {
  handleInputChange = event => {
    this.props.setTaskDraft(event.target.value);
  };
  
  render() {
    const { hasText } = this.props;
    return (
      <div className="taskInput">
        <input
          className="input"
          onChange={this.handleInputChange}
          placeholder="Type task here..."
        />
        <button
          disabled={!hasText}
          className={`send ${hasText ? "" : "disabled"}`}
        >
          Send
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTaskDraft: text => dispatch(setTaskDraft(text))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskInput);
