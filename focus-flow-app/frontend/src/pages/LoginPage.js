import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginpage.css";
// import Confetti from "react-confetti";

const LoginPage = () => {
  const navigate = useNavigate();

  const correctEmail = "user@example.com";
  const correctPassword = "password123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  // Handle login
  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      setLoggedIn(true); // Trigger effects
      setTimeout(() => navigate("/main"), 2000); // Navigate after 2 sec
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  // Handle key press (Enter should trigger login)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="home-container">
      {/* {loggedIn && <Confetti />} Show confetti when logged in */}
      {/* Show welcome message when logged in */}
      {/* Left side with illustration */}
      <div className="home-left"></div>
      {/* Right side with login section */}
      <div className="home-right">
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for Enter key
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for Enter key
            />
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
