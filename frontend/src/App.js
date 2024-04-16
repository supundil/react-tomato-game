import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TomatoBackground from "./components/TomatoBackground";
import Game from "./pages/Game";
import Scoreboard from "./pages/Scoreboard";
import MenuPage from "./pages/Menu";
import HowToPlay from "./pages/HowToPlay";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <TomatoBackground />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
