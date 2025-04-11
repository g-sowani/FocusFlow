import React from "react";
import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  return (
    <div className="home-container">
      {/* Left side with illustration */}
      <div className="home-left"></div>

      {/* Right side with login section */}
      <div className="home-right">
        <div className="login-box">
          <h2>Welcome to FocusFlow</h2>
          <p>
            Harness the power of our research-driven productivity tool to stay
            focused, organized, and on top of your goals. Let's redefine your
            productivity!
          </p>
          <button className="login-button" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
