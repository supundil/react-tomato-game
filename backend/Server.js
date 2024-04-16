// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/cis-game", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// User Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  confirmpassword: String,
  scores: [
    {
      score: Number,
      date: { type: Date, default: Date.now },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

// Login Endpoint
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      if (user.password === password) {
        res.json({ success: true, username: user.username });
      } else {
        res.json({ success: false, message: "Invalid password" });
      }
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get User Endpoint
app.get("/users/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username });
    if (user) {
      res.json({
        username: user.username,
        scores: user.scores,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Register Endpoint
app.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Score Endpoint
app.post("/scores", async (req, res) => {
  try {
    const { username, score } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { $push: { scores: { score: score } } },
      { new: true }
    );
    if (updatedUser) {
      res.json({ success: true, message: "Score updated successfully" });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
    console.error("Error updating score:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Leaderboard Endpoint
app.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await User.aggregate([
      {
        $project: {
          username: 1,
          totalScore: { $sum: "$scores.score" },
        },
      },
      {
        $sort: { totalScore: -1 },
      },
      {
        $limit: 10,
      },
    ]);
    res.json(leaderboard);
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
