import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3003/api/users/login",
        {
          username,
          password,
        }
      );
      // onLogin();
      console.log(response.data?.userddetails);
      localStorage.setItem("username", response.data?.userddetails);
      // localStorage.setItem("token", response.data.token);
      console.log("success");
      navigate("/ListView"); // Redirect to the dashboard after successful login
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="contain">
      {/* <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p> */}
      <div className="box">
        <div className="login">
          <div className="loginBx">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" onClick={handleLogin} />
            <div className="group">
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
