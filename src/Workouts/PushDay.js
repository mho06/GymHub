import React from 'react';
import './WorkoutProgram.css';

const PushDay = () => {
  return (
    <div className="workout-container">
      <h1>Push Day Workout</h1>

      {/* Table 1: Push 1 */}
      <h2>Push 1</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Workout Name</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>RPE/%RM</th>
            <th>Rest</th>
            <th>Alternatives</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Barbell Bench Press</td>
            <td>4</td>
            <td>6-8</td>
            <td>8/85%</td>
            <td>90 sec</td>
            <td>Dumbbell Press, Push-ups</td>
            <td>Keep elbows at 45-degree angle</td>
          </tr>
          <tr>
            <td>Overhead Press</td>
            <td>4</td>
            <td>8</td>
            <td>8/75%</td>
            <td>90 sec</td>
            <td>Arnold Press, Push Press</td>
            <td>Control the movement</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2: Push 2 */}
      <h2>Push 2</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Workout Name</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>RPE/%RM</th>
            <th>Rest</th>
            <th>Alternatives</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chest Fly</td>
            <td>3</td>
            <td>12</td>
            <td>7/70%</td>
            <td>60 sec</td>
            <td>Cable Chest Fly</td>
            <td>Focus on chest contraction</td>
          </tr>
          <tr>
            <td>Tricep Dips</td>
            <td>3</td>
            <td>8-10</td>
            <td>8/80%</td>
            <td>60 sec</td>
            <td>Skull Crushers</td>
            <td>Keep chest up</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PushDay;
