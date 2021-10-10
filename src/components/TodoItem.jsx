import React from "react";
import { useDispatch } from "react-redux";
import {
  taskComplete,
  deleteTask,
  completedTask,
  deleteAsyncTask,
} from "../redux/todoSlice";

const TodoItem = ({ userId, id, title, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    // dispatch(taskComplete({ id: id, completed: !completed }));
    dispatch(completedTask({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    // dispatch(deleteTask({ id: id }));
    dispatch(deleteAsyncTask({ id: id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-info"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          {/* <span>{userId}</span> */}
          <input
            type="checkbox"
            style={{ marginRight: 10 }}
            checked={completed}
            onChange={handleComplete}
          ></input>
          {title}
        </span>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
