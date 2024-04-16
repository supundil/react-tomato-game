import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HeartIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faHeart}
      className="text-red-500 mx-1"
      style={{ fontSize: "1.5rem" }}
    />
  );
};

export default HeartIcon;
