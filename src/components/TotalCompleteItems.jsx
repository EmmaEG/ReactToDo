import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTasks = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    <span className="mt-3">Total Items Completed: {completedTasks.length}</span>
  );
};

export default TotalCompleteItems;
