import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MenuForm = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log("Stored username:", storedUsername); // Check the stored username
    if (storedUsername) {
      axios
        .get(`http://localhost:3001/users/${storedUsername}`)
        .then((response) => {
          console.log("Response data:", response.data); // Check the response data
          setUsername(response.data.username);
        })
        .catch((error) => {
          console.error("Error fetching username:", error);
        });
    } else {
      console.error("Stored username is null or empty");
    }
  }, []);

  return (
    <div className="bg-white shadow-md rounded-xl px-16 pt-6 pb-8 mb-4 w-full max-w-md">
      <div className="mb-4 text-center text-gray-700 font-bold">
        Welcome, {username}
      </div>
      <hr
        style={{
          width: "100%",
          border: "1px solid black",
        }}
      />
      <div className="flex flex-col items-center py-5">
        <Link
          to="/game"
          className="link mb-4 px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 w-full text-center"
        >
          Play Game
        </Link>
        <Link
          to="/how-to-play"
          className="link mb-4 px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 w-full text-center"
        >
          How to Play
        </Link>
        <Link
          to="/profile"
          className="link mb-4 px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 w-full text-center"
        >
          Profile
        </Link>
        <Link
          to="/scoreboard"
          className="link mb-4 px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 w-full text-center"
        >
          Scoreboard
        </Link>
        <Link
          to="/home"
          className="link mb-4 px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 w-full text-center"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default MenuForm;
