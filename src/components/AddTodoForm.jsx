import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTask({
        title: value,
      })
      );
      setValue("");
  };

  return (
    <div>
    <h1 className="mt-3 text-center">My ToDo List</h1>
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="mt-1">New Task</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add task..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-info mb-2" disabled={!value}>
        Create
      </button>
    </form>
    </div>
  );
};

export default AddTodoForm;
