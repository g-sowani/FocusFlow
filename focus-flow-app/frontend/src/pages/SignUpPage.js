import React from "react";
import "../styles/signuppage.css";

const SignUpPage = () => {
  return (
    <div className="home-container">
      {/* Left side with illustration */}
      <div className="home-left"></div>

      {/* Right side with login section */}
      <div className="home-right">
        <div className="login-container">
          <div className="login-box">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="login-button">Sign Up</button>
            {/* <p className="signup-link">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
