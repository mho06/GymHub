import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase"; // adjust path if needed

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { redirectTo } = location.state || {};

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Create user profile if not exists
  async function createUserProfileIfNotExists(user, username = '') {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        username: username || user.displayName || '',
        age: '',
        gender: '',
        country: '',
        lastUsernameChange: null,
      });
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Ensure Firestore user profile exists
      await createUserProfileIfNotExists(user);

      const validRoutes = ["about", "membership", "profile"];
      if (redirectTo && validRoutes.includes(redirectTo)) {
        navigate(`/${redirectTo}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Error logging in: " + error.message);
    } finally {
      setLoading(false); // ✅ Hide the loader no matter what
    }
  };

  return (
    <div className="login-container">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Logging you in...</p>
        </div>
      )}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-group">
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

          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>No account? <Link to="/signup">Sign up here</Link>.</p>
      </div>
    </div>
  );
}

export default Login;
