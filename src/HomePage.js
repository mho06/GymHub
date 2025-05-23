import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FaDumbbell, FaUserCircle } from 'react-icons/fa';
import './HomePage.css';

function HomePage() {
  const [user, loadingAuth] = useAuthState(auth);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false); // ✅ NEW state for page loading
  const [savedPrograms, setSavedPrograms] = useState([]);  // Added state to hold saved programs

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

  const handleNavigate = (path) => {
    setLoadingPage(true);
    setTimeout(() => {
      navigate(path);
    }, 300); // Add slight delay to show loader (can be adjusted or removed)
  };

  // Load saved programs from localStorage
  useEffect(() => {
    const programs = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const program = localStorage.getItem(key);
      if (program && key.startsWith('customWorkoutProgram')) {
        programs.push({ name: key, program: JSON.parse(program) });
      }
    }
    setSavedPrograms(programs);
  }, []);

   const handleProgramClick = (programName) => {
    navigate(`/program-detail/${programName}`);  // Navigate to detailed view page
  };

  return (
    <div className="homepage-container">
      {(loadingAuth || loadingPage) && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading GymHub...</p>
        </div>
      )}

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
                <button onClick={() => handleNavigate('/profile')}>Go to Profile</button>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="dashboard">
        <div onClick={() => handleNavigate('/subscribe')} className="dashboard-item">Subscribe</div>
        <div onClick={() => handleNavigate('/shop')} className="dashboard-item">Shop</div>
        <div onClick={() => handleNavigate('/workouts')} className="dashboard-item">Workouts</div>
        <div onClick={() => handleNavigate('/progress')} className="dashboard-item">Progress Tracker</div>
        <div onClick={() => handleNavigate('/nutrition')} className="dashboard-item">Nutrition</div>
      </main>

      {/* Display Saved Programs */}
      <section className="saved-programs-section">
        <h2>Your Saved Programs</h2>
        {savedPrograms.length === 0 ? (
          <p>No saved programs found. Start creating and saving your workout programs!</p>
        ) : (
          <div className="program-list">
            {savedPrograms.map((program, index) => (
              <div key={index} className="program-card" onClick={() => handleProgramClick(program.name)}>
                <h3>{program.name}</h3>
              </div>
            ))}
          </div>
        )}
      </section>

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
