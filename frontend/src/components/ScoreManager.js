import { useState } from "react";

export const useScore = () => {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 50);
  };

  return { score, updateScore };
};
