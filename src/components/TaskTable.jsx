import React from 'react';
import TaskCategoryRow from './TaskCategoryRow';
import TaskRow from './TaskRow';
import '../styles/App.css';

function TaskTable({ tasks }) {
  const rows = [];
  let lastCategory = null;

  tasks.forEach((task) => {
    if (task.category !== lastCategory) {
      rows.push(
        <TaskCategoryRow
          category={task.category}
          key={task.category}
        />
      );
    }
    rows.push(
      <TaskRow
        task={task.name}
        key={task.name}
      />
    );
    lastCategory = task.category;
  });

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default TaskTable;
