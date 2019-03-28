import React from "react";

const Task = ({ author, text, isDone, index, onClick }) => (
  <div className={`task ${isDone ? 'completed' : ''}`} onClick={() => onClick(index, !isDone)}>
    <div className="author">{author}</div>
    <div className="text">{text}</div>
  </div>
);

export default Task;
