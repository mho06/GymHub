// src/HomePage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FaDumbbell, FaUserCircle } from 'react-icons/fa';
import './HomePage.css';

function HomePage() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const initial = user?.email?.charAt(0).toUpperCase();

  const handleProfileClick = () => {
    if (user) {
      setShowDropdown((prev) => !prev);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error.message);
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
          <div className="profile-wrapper">
            <div className="profile-circle" onClick={handleProfileClick}>
              {user ? initial : <FaUserCircle className="profile-icon" />}
            </div>
            {showDropdown && user && (
              <div className="profile-dropdown">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.displayName || 'Not set'}</p>
                <button onClick={() => navigate('/profile')}>Go to Profile</button>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
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
    </div>
  );
}

export default HomePage;
