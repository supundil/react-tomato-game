// frontend/LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LockImg, UserImg } from "../assets";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          localStorage.setItem("username", username); // Store username in local storage
          navigate("/menu", { state: { username } });
        } else {
          setError(result.data.message);
        }
      })
      .catch((err) => {
        console.error("Error logging in:", err);
        setError("An error occurred. Please try again later.");
      });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <div className="relative">
            <img
              src={UserImg}
              className="absolute top-0 left-0 mt-2 ml-2 h-6"
              alt="Username"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 relative">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <img
              src={LockImg}
              className="absolute top-0 left-0 mt-2 ml-2 h-6"
              alt="Password"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <button
            className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
            onClick={handleRegister}
          >
            Register Here
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
