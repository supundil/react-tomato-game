// frontend/components/ScoreboardComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

const ScoreboardComponent = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data
    axios
      .get("http://localhost:3001/leaderboard")
      .then((response) => {
        setLeaderboard(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard:", error);
      });
  }, []);

  return (
    <Container className="mt-4 bg-white px-10 py-14 rounded-xl">
      <Card>
        <Card.Body>
          <h1 className="text-center font-semibold">Leaderboard</h1>
          <hr />
          <br />
          <ol>
            {leaderboard.map((entry, index) => (
              <li key={index}>
                <hr />
                Username: {entry.username}, Total Score: {entry.totalScore}
                <hr />
              </li>
            ))}
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ScoreboardComponent;
