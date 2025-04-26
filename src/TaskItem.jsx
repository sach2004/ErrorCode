import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      {task.name} - {task.completed ? "Done" : "Pending"}
    </li>
  );
}

export default TaskItem;
