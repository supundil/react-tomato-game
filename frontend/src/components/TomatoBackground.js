import React from "react";
import "./TomatoBackground.css"; // Import your CSS file
import { TomatoImg } from "../assets";

const TomatoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-r from-red-500 to-pink-500 overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-between animate-tomatoes">
        {/* Tomatoes coming from different directions */}
        <img
          src={TomatoImg}
          alt="Tomato Icon"
          className="w-16 h-16 animate-tomato"
          style={{
            animationDelay: "1s",
            animationName: "move-tomato-left-top",
            animationDuration: "4s",
          }}
        />
        <img
          src={TomatoImg}
          alt="Tomato Icon"
          className="w-16 h-16 animate-tomato"
          style={{
            animationDelay: "2s",
            animationName: "move-tomato-right-top",
            animationDuration: "5s",
          }}
        />
        <img
          src={TomatoImg}
          alt="Tomato Icon"
          className="w-16 h-16 animate-tomato"
          style={{
            animationDelay: "3s",
            animationName: "move-tomato-left-bottom",
            animationDuration: "4.5s",
          }}
        />
        <img
          src={TomatoImg}
          alt="Tomato Icon"
          className="w-16 h-16 animate-tomato"
          style={{
            animationDelay: "4s",
            animationName: "move-tomato-right-bottom",
            animationDuration: "5.5s",
          }}
        />
        <img
          src={TomatoImg}
          alt="Tomato Icon"
          className="w-16 h-16 animate-tomato"
          style={{
            animationDelay: "5s",
            animationName: "move-tomato-top",
            animationDuration: "6s",
          }}
        />
        <img
          src={TomatoImg}
          alt="Tomato Icon"
          className="w-16 h-16 animate-tomato"
          style={{
            animationDelay: "6s",
            animationName: "move-tomato-left",
            animationDuration: "4s",
          }}
        />
        {/* Add more tomato images as needed */}
      </div>
    </div>
  );
};

export default TomatoBackground;
