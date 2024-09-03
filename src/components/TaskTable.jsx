import React from 'react';
import TaskCategoryRow from './TaskCategoryRow';
import TaskRow from './TaskRow';
import '../styles/App.css';

function TaskTable({ tasks, onCompleteTask, isCompleted }) {
  const rows = [];
  let lastCategory = null;

  // Sort tasks by category to ensure they are grouped together
  const sortedTasks = [...tasks].sort((a, b) => a.category.localeCompare(b.category));

  sortedTasks.forEach((task) => {
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
        task={task}
        key={task.id}
        onComplete={() => onCompleteTask(task.id)}
        isCompleted={isCompleted}
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
