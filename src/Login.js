import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { redirectTo } = location.state || {};

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const validRoutes = ["about", "membership", "profile"];
      if (redirectTo && validRoutes.includes(redirectTo)) {
        navigate(`/${redirectTo}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  return (
    <div className="login-container">
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
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show-password-btn"
            >
              <i className="fas fa-dumbbell"></i>
            </button>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>No account? <Link to="/signup">Sign up here</Link>.</p>
      </div>
    </div>
  );
}

export default Login;
