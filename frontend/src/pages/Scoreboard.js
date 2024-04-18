import React from "react";
import ScoreboardComponent from "../components/ScoreboardComponent";
import { Link } from "react-router-dom";

const Scoreboard = () => {
  return (
    <div>
      <ScoreboardComponent />
      <div className="bg-white px-16 py-4 rounded-xl mt-8">
        <Link
          to="/menu"
          className="link px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 text-center"
        >
          To menu
        </Link>
      </div>
    </div>
  );
};

export default Scoreboard;
