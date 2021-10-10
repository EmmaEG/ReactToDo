import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 mt-5">
          <h1 className="text-center">Login</h1>
          <hr />
          <form onSubmit={onSubmit} className="form-inline mt-5 mb-3">
            <div className="mb-3">
              <label className="mt-1">Email</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="example: emanuelgranara@hotmail.com "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label className="mt-1">Password</label>
              <input
                type="password"
                className="form-control mb-2 mr-sm-2"
                placeholder="example: 123456"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-info w-100" disabled={!email || !password}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
