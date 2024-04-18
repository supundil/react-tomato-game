import React from "react";
import { Link } from "react-router-dom";

const HowToPlay = () => {
  return (
    <div className="flex justify-center items-center px-24 py-24">
      <div className="flex flex-col items-center">
        <p className="flex justify-center items-center bg-white py-10 px-10 rounded-xl mb-10 max-w-[600px]">
          To play this game you need to find the values which shown in the
          tomatoes (🍅) and enter the answer input box and click submit button
          if the answer is correct you can go to the next level. 😀 if the
          answer is incorrect game start from the level 01. 😥 You have 3
          lifelines and timer. So, save the lifelines and beat the timer. 😎
          Enajoy the game !{" "}
        </p>
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
