// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import Subscribe from './Subscribe';
import WorkoutPage from './Workouts/WorkoutPage'; // Main workout page
import LegDay from './Workouts/LegDay';
import PushDay from './Workouts/PushDay';
import PullDay from './Workouts/PullDay';
import CustomizedPrograms from './Workouts/CustomizedPrograms';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/workouts" element={<WorkoutPage />} />
        <Route path="/workouts/leg-day" element={<LegDay />} />
        <Route path="/workouts/push-day" element={<PushDay />} />
        <Route path="/workouts/pull-day" element={<PullDay />} />
        <Route path="/workouts/customizedprograms" component={CustomizedPrograms} />

      </Routes>
    </Router>
  );
}

export default App;
