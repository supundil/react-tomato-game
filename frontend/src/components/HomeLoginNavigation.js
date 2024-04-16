import React from "react";
import { Link } from "react-router-dom";

const HomeLoginNavigation = () => {
  return (
    <div className="bg-white shadow-md rounded-xl px-16 pt-6 pb-8 mb-4 w-full max-w-md ">
      <p className="text-center">Do You want to play the game 😀</p>
      <div className="flex justify-center">
        <Link
          to="/login"
          className="link px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 text-center"
        >
          Login Here!
        </Link>
      </div>
    </div>
  );
};

export default HomeLoginNavigation;
