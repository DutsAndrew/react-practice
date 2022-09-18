import React from "react";

const Overview = (props) => {
  const { tasks } = props;
  console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => {
        return <p key={task.id}>{task.taskNumber}: {task.text}</p>;
      })}
    </ul>
  )
}

export default Overview;