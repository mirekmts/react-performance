import React from "react";

const Task = ({ author, text, isDone }) => (
  <div className={`task ${isDone ? 'completed' : ''}`}>
    <div className="author">{author}</div>
    <div className="text">{text}</div>
  </div>
);

export default Task;
