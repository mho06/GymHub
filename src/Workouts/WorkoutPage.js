// File: WorkoutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkoutPage.css';

function WorkoutPage() {
  const navigate = useNavigate();

  const workouts = [
    {
      title: 'Leg Day Power',
      description: 'Boost your lower body strength with targeted exercises.',
      route: '/workouts/leg-day',
    },
    {
      title: 'Push Day Focus',
      description: 'Strengthen chest, shoulders, and triceps in one go.',
      route: '/workouts/push-day',
    },
    {
      title: 'Pull Day Gains',
      description: 'Build back and biceps with heavy compound moves.',
      route: '/workouts/pull-day',
    },
    {
      title: 'Make Your Own Program',
      description: 'Create a customized workout plan based on your goals.',
      route: '/workouts/customizedprograms',
    },
  ];

  return (
    <div className="workout-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
      <h2 className="workout-title">Workout Programs</h2>
      <div className="workout-grid">
        {workouts.map((workout, index) => (
          <div className="workout-card" key={index}>
            <div className="workout-card-inner">
              <div className="workout-card-front">
                <h3>{workout.title}</h3>
              </div>
              <div className="workout-card-back">
                <p>{workout.description}</p>
                <button onClick={() => navigate(workout.route)}>View Program</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPage;
