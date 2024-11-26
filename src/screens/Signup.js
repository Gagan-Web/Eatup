import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if(json.success) {
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
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join us for a delicious journey!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-input"
              name="name"
              value={credentials.name}
              onChange={onchange}
              placeholder="Enter your name"
              required
            />
          </div>
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
              placeholder="Create a password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="geolocation" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-input"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onchange}
              placeholder="Enter your address"
              required
            />
          </div>
          <button type="submit" className="btn signup-btn">
            Sign Up
          </button>
          <div className="form-footer">
            <span>Already a user?</span>
            <Link to="/login" className="btn login-link">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
