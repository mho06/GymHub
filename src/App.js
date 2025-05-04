import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';  // Your homepage (dashboard) component
import ProtectedRoute from './ProtectedRoute';  // Your protected route component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home Page */}
        <Route path="/login" element={<Login />} />  {/* Login Page */}
        <Route path="/signup" element={<Signup />} />  {/* Signup Page */}
      </Routes>
    </Router>
  );
}

export default App;
