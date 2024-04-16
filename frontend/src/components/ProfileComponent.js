// frontend/components/ProfileComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

const ProfileComponent = () => {
  const [username, setUsername] = useState("");
  const [scores, setScores] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    // Fetch user data including scores
    axios
      .get(`http://localhost:3001/users/${localStorage.getItem("username")}`)
      .then((response) => {
        setUsername(response.data.username);
        setScores(response.data.scores);
        calculateTotalScore(response.data.scores);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const calculateTotalScore = (scores) => {
    const totalScore = scores.reduce((sum, score) => sum + score.score, 0);
    setTotalScore(totalScore);
  };

  return (
    <Container className="mt-4 bg-white px-10 py-14 rounded-xl">
      <Card>
        <Card.Body>
          <h1 className="text-center font-semibold">Profile</h1>
          <p>Username: {username}</p>
          <p>Total Score: {totalScore}</p>
          <h2>Scores:</h2>
          <ul>
            {scores.map((score, index) => (
              <li key={index}>
                Score: {score.score}, Date:{" "}
                {new Date(score.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfileComponent;
