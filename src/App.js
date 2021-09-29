import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import Login from "./components/Login";
import Logout from "./components/Logout";

const App = () => {
  const user = useSelector((state) => state.user.user);

  //todos
  return (
    <div className="container">
      {user ? (
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <Logout />
            <AddTodoForm />
            <TotalCompleteItems />
            <TodoList />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
