import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './HomePage.css'; // Assuming you have a CSS file for styling

function HomePage() {
  const navigate = useNavigate();

  // Redirection function for login, passes the selected feature to login
  const redirectToLogin = (feature) => {
    navigate(`/login`, { state: { redirectTo: feature } });
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to GymHub</h1>
      <p>Choose an option from the dashboard below</p>

      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <button onClick={() => redirectToLogin("about")}>About</button>
          </li>
          <li>
            <button onClick={() => redirectToLogin("membership")}>Subscribe to Gym Membership</button>
          </li>
          <li>
            <button onClick={() => redirectToLogin("profile")}>Profile</button>
          </li>
        </ul>

        <div className="auth-links">
          <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
