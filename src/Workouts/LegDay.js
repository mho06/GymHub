import React from 'react';
import './WorkoutProgram.css'; // Ensure to add your styling for the tables

const LegDay = () => {
  return (
    <div className="workout-container">
      <h1>Leg Day Workout</h1>

      {/* Table 1: Legs 1 */}
      <h2>Legs 1</h2>
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
            <td>BACK SQUAT</td>
            <td>4</td>
            <td>5</td>
            <td>70%</td>
            <td>3-4 MIN</td>
            <td></td>
            <td>SIT BACK AND DOWN, 15° TOE FLARE, DRIVE YOUR KNEES OUT LATERALLY</td>
          </tr>
          <tr>
            <td>DEADLIFT</td>
            <td>2</td>
            <td>8</td>
            <td>65%</td>
            <td>3-4 MIN</td>
            <td></td>
            <td>BRACE YOUR LATS, CHEST TALL, HIPS HIGH, PULL THE SLACK OUT OF THE BAR PRIOR TO MOVING IT OFF THE GROUND</td>
          </tr>
          <tr>
            <td>BARBELL HIP THRUST</td>
            <td>3</td>
            <td>10-12</td>
            <td>6</td>
            <td>2-3 MIN</td>
            <td></td>
            <td>TUCK YOUR CHIN AND RIB CAGE DOWN, ONLY MOVE YOUR HIPS. USE A PAD</td>
          </tr>
          <tr>
            <td>DUMBBELL WALKING LUNGE</td>
            <td>2</td>
            <td>20 EACH LEG</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>TAKE MEDIUM STRIDES, MINIMIZE THE AMOUNT YOU PUSH OFF YOUR REAR LEG</td>
          </tr>
          <tr>
            <td>A1: LEG EXTENSION</td>
            <td>3</td>
            <td>15</td>
            <td>7</td>
            <td>0 MIN</td>
            <td></td>
            <td>FOCUS ON SQUEEZING YOUR QUADS TO MOVE THE WEIGHT</td>
          </tr>
          <tr>
            <td>A2: SEATED LEG CURL</td>
            <td>3</td>
            <td>15</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>FOCUS ON SQUEEZING YOUR HAMSTRINGS TO MOVE THE WEIGHT</td>
          </tr>
          <tr>
            <td>STANDING CALF RAISE</td>
            <td>3</td>
            <td>10</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>PRESS ALL THE WAY UP TO YOUR TOES, STRETCH YOUR CALVES AT THE BOTTOM, DON'T BOUNCE</td>
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
            <td>DEADLIFT</td>
            <td>4</td>
            <td>4</td>
            <td>72.50%</td>
            <td>3-4 MIN</td>
            <td></td>
            <td>BRACE YOUR LATS, CHEST TALL, HIPS HIGH, PULL THE SLACK OUT OF THE BAR PRIOR TO MOVING IT OFF THE GROUND</td>
          </tr>
          <tr>
            <td>FRONT SQUAT</td>
            <td>3</td>
            <td>6-8</td>
            <td>60%</td>
            <td>2-3 MIN</td>
            <td></td>
            <td>SIT DOWN, 15° TOE FLARE, DRIVE YOUR KNEES OUT LATERALLY</td>
          </tr>
          <tr>
            <td>CABLE PULL THROUGH</td>
            <td>3</td>
            <td>20</td>
            <td>8</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>FOCUS ON ANTERIORLY TILTING YOUR PELVIS DURING THE ECCENTRIC, POSTERIORLY DURING THE CONCENTRIC</td>
          </tr>
          <tr>
            <td>SINGLE-LEG LEG PRESS</td>
            <td>3</td>
            <td>10-12</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>HIGH FOOT PLACEMENT</td>
          </tr>
          <tr>
            <td>SINGLE-LEG LEG EXTENSION</td>
            <td>3</td>
            <td>15</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>START WITH YOUR WEAKER LEG, FOCUS ON SQUEEZING YOUR QUADS TO MOVE THE WEIGHT</td>
          </tr>
          <tr>
            <td>SWISS BALL SINGLE-LEG LEG CURL</td>
            <td>3</td>
            <td>12</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>START WITH YOUR WEAKER LEG, PREVENT YOUR HIPS FROM TOUCHING THE GROUND</td>
          </tr>
          <tr>
            <td>STANDING CALF RAISE</td>
            <td>3</td>
            <td>15</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>PRESS ALL THE WAY UP TO YOUR TOES, STRETCH YOUR CALVES AT THE BOTTOM, DON'T BOUNCE</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default LegDay;
