import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore

import './Signup.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setLoading(true);
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,  // Save email
        username: username, // Save username
        age: null,          // You can initialize this later, or leave it as null
        gender: null,       // Same as age
        country: null,      // Same as age
      });

      navigate("/login"); // redirect to login page after successful signup
    } catch (error) {
      alert("Error signing up: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Navigate to Home page without saving data
  const handleReturnHome = () => {
    navigate("/");  // Goes back to home page
  };

  return (
    <div className="signup-container">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Creating your account...</p>
        </div>
      )}
      <div className="signup-form">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-grid">
            <div className="input-group">
              <label>Username</label>
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div className="input-group password-container">
              <label>Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <span onClick={() => setShowPassword(!showPassword)} className="show-password-btn">
                <i className="fas fa-dumbbell"></i> {/* Dumbbell icon */}
              </span>
            </div>

            <div className="input-group password-container">
              <label>Confirm Password</label>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="show-password-btn">
                <i className="fas fa-dumbbell"></i> {/* Dumbbell icon */}
              </span>
            </div>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        {/* Button to return to Home page without saving */}
        <button onClick={handleReturnHome} className="return-home-btn">
          Return to Home
        </button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
