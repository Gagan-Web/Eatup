import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("useremail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };

  const onchange = async (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Log in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-input"
              name="email"
              value={credentials.email}
              onChange={onchange}
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              name="password"
              value={credentials.password}
              onChange={onchange}
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn login-btn">
            Login
          </button>
          <div className="form-footer">
            <span>New here?</span>
            <Link to="/createuser" className="btn signup-btn">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
