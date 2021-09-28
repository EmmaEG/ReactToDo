import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1 className="mt-3 text-center">My ToDo List</h1>
          <div className="card bg-light m-2 p-3">
            <AddTodoForm />
            <TodoList />
            <TotalCompleteItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

//style={{backgroundColor:"grey"}}
