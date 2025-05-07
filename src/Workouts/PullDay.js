import React from 'react';
import './WorkoutProgram.css';

const PullDay = () => {
  return (
    <div className="workout-container">
      <h1>Pull Day Workout</h1>

      {/* Table 1: Pull 1 */}
      <h2>Pull 1</h2>
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
            <td>Deadlift</td>
            <td>4</td>
            <td>5</td>
            <td>9/90%</td>
            <td>90 sec</td>
            <td>Romanian Deadlift, Trap Bar Deadlift</td>
            <td>Keep back straight</td>
          </tr>
          <tr>
            <td>Pull-ups</td>
            <td>3</td>
            <td>8-10</td>
            <td>8/80%</td>
            <td>90 sec</td>
            <td>Lat Pulldown</td>
            <td>Use a full range of motion</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2: Pull 2 */}
      <h2>Pull 2</h2>
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
            <td>Bent-over Rows</td>
            <td>4</td>
            <td>6-8</td>
            <td>8/80%</td>
            <td>90 sec</td>
            <td>Seated Rows, Dumbbell Rows</td>
            <td>Keep torso stable</td>
          </tr>
          <tr>
            <td>Barbell Curls</td>
            <td>3</td>
            <td>10-12</td>
            <td>7/75%</td>
            <td>60 sec</td>
            <td>Hammer Curls</td>
            <td>Do not swing</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PullDay;
