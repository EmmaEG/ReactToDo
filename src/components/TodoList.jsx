import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../redux/todoSlice";

import TodoItem from "./TodoItem";
import Pagination from './Pagination'

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(20);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = todos.slice(indexOfFirstTask, indexOfLastTask);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ul className="list-group mb-2">
      {currentTasks.map((todo) => (
        <TodoItem
          key={todo.id}
          userId={todo.userId}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
        ))}
        <Pagination tasksPerPage={tasksPerPage} totalTasks={todos.length} paginate={paginate} />
    </ul>
  );
};

export default TodoList;
