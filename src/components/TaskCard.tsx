import React from "react";

type TaskCardProps = {
  task: { name: string; description: string };
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
  <div className="task-card">
    <h4>{task.name}</h4>
    <p>{task.description}</p>
  </div>
);

export default TaskCard;
