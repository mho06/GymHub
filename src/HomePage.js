// src/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FaDumbbell, FaUserCircle } from 'react-icons/fa';

import './HomePage.css';

function HomePage() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const initial = user?.email?.charAt(0).toUpperCase();

  const handleProfileClick = () => {
    if (user) {
      setShowProfile((prev) => !prev); // Toggle profile info
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/'; // Redirect to homepage
    } catch (error) {
      console.error('Error signing out: ', error.message);
    }
  };

  return (
    <div className="homepage-container">
      <header className="header">
        <div className="logo-section" onClick={() => window.location.href = '/'}>
          <FaDumbbell className="logo-icon" />
          <h1 className="logo">GymHub</h1>
        </div>

        <div className="header-right">
          {!user && (
            <>
              <Link to="/login" className="header-link">Login</Link>
              <Link to="/signup" className="header-link">Sign Up</Link>
            </>
          )}
          <div className="profile-circle" onClick={handleProfileClick}>
            {user ? initial : <FaUserCircle className="profile-icon" />}
          </div>
        </div>
      </header>

      <main className="dashboard">
        <Link to="/membership" className="dashboard-item">Subscribe</Link>
        <Link to="/shop" className="dashboard-item">Shop</Link>
        <Link to="/workouts" className="dashboard-item">Workouts</Link>
        <Link to="/progress" className="dashboard-item">Progress Tracker</Link>
        <Link to="/nutrition" className="dashboard-item">Nutrition</Link>
      </main>

      <section className="info-section">
        <div className="about-us">
          <h2>About Us</h2>
          <p>GymHub is your digital companion to help you achieve your fitness goals...</p>
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          <p>Email: support@gymhub.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </section>

      {showProfile && user && (
        <div className="profile-info-container">
          <h3>User Information</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
