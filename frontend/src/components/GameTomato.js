import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container, Card, Form, Spinner } from "react-bootstrap";
import HeartIcon from "./HeartIcon";
import { useScore } from "./ScoreManager"; // Import the useScore hook

const GameTomato = () => {
  const { score, updateScore } = useScore(); // Destructure score and updateScore from the useScore hook
  const [level, setLevel] = useState(1);
  const [timer, setTimer] = useState(180);
  const [imageURL, setImageURL] = useState("");
  const [solution, setSolution] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [lives, setLives] = useState(3);
  const countdownRef = useRef(null);

  const handleRedirectToMenu = () => {
    window.location.href = "/menu";
  };

  const fetchQuestion = () => {
    setLoading(true);
    axios
      .get("https://marcconrad.com/uob/tomato/api.php")
      .then((response) => {
        const { question, solution } = response.data;
        setImageURL(question);
        setSolution(solution);
        resetTimer();
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching question:", error);
        alert("Failed to fetch the question. Please try again later.");
        setLoading(false);
      });
  };

  const resetTimer = () => {
    switch (level) {
      case 10:
        setTimer(10);
        break;
      default:
        setTimer(180 - level * 10);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [level]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(countdownRef.current);
          handleTimeOut();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    countdownRef.current = countdown;

    return () => clearInterval(countdown);
  }, [level]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stringAnswer = answer.toString();
    const stringSolution = solution.toString();
    if (stringAnswer === stringSolution) {
      clearInterval(countdownRef.current);
      handleLevelComplete();
    } else {
      handleWrongAnswer();
    }
  };

  const handleLevelComplete = () => {
    if (level === 10) {
      alert("Congratulations! You have completed the game!");
      window.location.href = "/menu";
      setAnswer("");
    } else {
      const result = window.confirm(
        "Level Complete! Proceed to the next level?"
      );
      if (result) {
        setLevel(level + 1);
        updateScore(); // Increment the score when completing a level
      }
    }
  };

  const handleTimeOut = () => {
    alert("Time's Up! You ran out of time. Try again from Level 1.");
    setLevel(1);
    setLives(3);
    setAnswer("");
    fetchQuestion();
  };

  const handleWrongAnswer = () => {
    if (lives > 1) {
      setLives(lives - 1);
      alert("Oops... Incorrect answer. You lost a life.");
      setAnswer("");
      fetchQuestion();
    } else {
      alert("Game Over! You've run out of lives.");
      setLevel(1);
      setLives(3);
      setAnswer("");
      fetchQuestion();
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-between align-items-center vh-100 bg-red-300 px-4 rounded-3xl"
    >
      {/* Display heart icons for lives on the left side */}
      <div>
        {Array.from({ length: lives }, (_, index) => (
          <HeartIcon key={index} />
        ))}
      </div>

      <Card className="p-4 w-full">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="level-text text-center flex-grow-1 bg-slate-50 px-3 py-1 rounded-2xl">
              Level {level}
            </div>

            <div className="d-flex align-items-center">
              <div
                className="score"
                style={{ fontSize: "1rem", marginRight: "8px" }}
              >
                Score: {score}
              </div>
              <div className="timer" style={{ fontSize: "1rem" }}>
                {Math.floor(timer / 60) +
                  ":" +
                  (timer % 60).toString().padStart(2, "0") +
                  ": Time"}
              </div>
            </div>
          </div>
          <img
            src={imageURL}
            alt="Question"
            className="question-image mb-2 rounded-2xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="answer" style={{ fontSize: "1rem" }}>
                Answer:
              </Form.Label>
              <input
                id="answer"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="px-3 mx-2 py-1 rounded-2xl bg-slate-50"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <button
                type="submit"
                className="btn btn-primary  bg-slate-50 px-5 mx-2 py-1 rounded-2xl"
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary bg-slate-50 px-5 mx-2 py-1 rounded-2xl"
                onClick={handleRedirectToMenu}
              >
                Game Menu
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Container>
  );
};

export default GameTomato;
