import React from 'react';
import './WorkoutProgram.css'; // Ensure to add your styling for the tables

const LegDay = () => {
  return (
    <div className="workout-container">
      <h1>Leg Day Workout</h1>

      {/* Table 1: Legs 1 */}
      <h2>Legs 1</h2>
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
            <td>Legs #1</td>
            <td>4</td>
            <td>8-12</td>
            <td>7/80%</td>
            <td>90 sec</td>
            <td>Smith Machine Squats, Bodyweight Squats</td>
            <td>Focus on full range of motion</td>
          </tr>
          <tr>
            <td>Leg Press</td>
            <td>3</td>
            <td>10</td>
            <td>8/75%</td>
            <td>90 sec</td>
            <td>Squats, Hack Squats</td>
            <td>Keep knees tracking over toes</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2: Legs 2 */}
      <h2>Legs 2</h2>
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
            <td>Hamstring Curl</td>
            <td>3</td>
            <td>12</td>
            <td>7/70%</td>
            <td>60 sec</td>
            <td>Romanian Deadlifts, Good Mornings</td>
            <td>Avoid jerking the weights</td>
          </tr>
          <tr>
            <td>Walking Lunges</td>
            <td>3</td>
            <td>20 steps</td>
            <td>8/70%</td>
            <td>60 sec</td>
            <td>Bodyweight Lunges, Step-ups</td>
            <td>Maintain upright torso</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LegDay;
