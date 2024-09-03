import React from 'react';
import '../styles/App.css';

function TaskCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" className="category-row">{category}</th>
    </tr>
  );
}

export default TaskCategoryRow;
