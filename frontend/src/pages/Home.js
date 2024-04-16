// In your Home.js file

import React from "react";
import ImageSlider from "../components/ImageSlider";
import HomeLoginNavigation from "../components/HomeLoginNavigation";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";

const images = [one, two, three, four, five];

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <ImageSlider images={images} />
      <HomeLoginNavigation />
    </div>
  );
};

export default Home;
