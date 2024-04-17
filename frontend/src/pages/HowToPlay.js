import React from "react";
import { HowToPlayIMG } from "../assets";
import { Link } from "react-router-dom";

const HowToPlay = () => {
  return (
    <div className="flex justify-center items-center px-24 py-24">
      <div className="flex flex-col items-center">
        <img src={HowToPlayIMG} alt="How to play" className="w-1/2 h-auto" />
        <div className="bg-white px-16 py-4 rounded-xl mt-8">
          <Link
            to="/menu"
            className="link px-16 py-2 bg-red-500 text-white rounded-xl hover:bg-red-700 text-center"
          >
            To menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
