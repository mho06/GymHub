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
            <td>BARBELL BENCH PRESS</td>
            <td>3</td>
            <td>6-8</td>
            <td>75%</td>
            <td>2-3 MIN</td>
            <td>Dumbbell Press</td>
            <td>TUCK ELBOWS AT A 45° ANGLE, SQUEEZE YOUR SHOULDER BLADES AND STAY FIRM ON THE BENCH</td>
          </tr>
          <tr>
            <td>MACHINE SHOULDER PRESS</td>
            <td>3</td>
            <td>10</td>
            <td>7</td>
            <td>2-3 MIN</td>
            <td>Arnold Press OR Push Press</td>
            <td>ADJUST THE SEAT SO THE HANDLES ARE AT SHOULDER HEIGHT. PAUSE BRIEFLY AT THE TOP</td>
          </tr>
          <tr>
            <td>BODY WEIGHTED DIPS</td>
            <td>3</td>
            <td>6-8</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td>Close-Grip Bench Press</td>
            <td>TUCK YOUR ELBOWS AT A 45° ANGLE, LEAN YOUR TORSO FORWARD 15°, KEEP YOUR SCAPULAE RETRACTED</td>
          </tr>
          <tr>
            <td>LOW-TO-HIGH CABLE FLYE</td>
            <td>3</td>
            <td>10</td>
            <td>8</td>
            <td>1-2 MIN</td>
            <td>Dumbbell Fly</td>
            <td>START EXTERNALLY ROTATED WITH YOUR ELBOWS DOWN AND OUT, PULL YOUR ELBOWS (NOT HANDS) UP AND IN WHILE SLIGHTLY INTERNALLY ROTATING YOUR SHOULDER</td>
          </tr>
          <tr>
            <td>CABLE OVERHEAD TRICEPS EXTENSION </td>
            <td>3</td>
            <td>10</td>
            <td>8</td>
            <td>1-2 MIN</td>
            <td>Skull Crushers</td>
            <td>EXTEND YOUR FOREARMS OVERHEAD, UNTIL YOUR ARMS ARE FULLY EXTENDED BUT NOT LOCKED OUT AT THE ELBOWS</td>
          </tr>
          <tr>
            <td>CABLE LATERAL RAISES</td>
            <td>3</td>
            <td>10</td>
            <td>8</td>
            <td>1-2 MIN</td>
            <td>Dumbbell OR Machine Lateral Raises</td>
            <td>KEEP YOUR ELBOWS HIGH, EXTEND YOUR ARMS OUT IN A SEMI-CIRCLE MOTION. ONCE YOUR HANDS GET TO AROUND SHOULDER HEIGHT, PAUSE AND SLOWLY LOWER THE WEIGHT BACK TO THE STARTING POSITION.</td>
          </tr>
          <tr>
            <td>(OPTIONAL) ABS CRUNCHES</td>
            <td>3</td>
            <td>10</td>
            <td></td>
            <td>1-2 MIN</td>
            <td></td>
            <td></td>
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
      <td>CLOSE GRIP BENCH PRESS</td>
      <td>3</td>
      <td>6-8</td>
      <td>70%</td>
      <td>2-3 MIN</td>
      <td>DIPS</td>
      <td>SHOULDER WIDTH GRIP, ELBOWS DOWN AT YOUR SIDES</td>
    </tr>
    <tr>
      <td>MILITARY PRESS</td>
      <td>3</td>
      <td>5</td>
      <td>80%</td>
      <td>2-3 MIN</td>
      <td>DUMBBELL SHOULDER PRESS</td>
      <td>SQUEEZE YOUR GLUTES TO KEEP YOUR TORSO UPRIGHT, CLEAR YOUR HEAD OUT OF THE WAY, PRESS UP AND SLIGHTLY BACK</td>
    </tr>
    <tr>
      <td>DUMBBELL INCLINE PRESS</td>
      <td>3</td>
      <td>10-12</td>
      <td>7</td>
      <td>1-2 MIN</td>
      <td>INCLINE BENCH PRESS</td>
      <td>KEEP YOUR SCAPULAE RETRACTED AND DEPRESSED</td>
    </tr>
    <tr>
      <td>PEC DEC</td>
      <td>3</td>
      <td>15</td>
      <td>7</td>
      <td>1-2 MIN</td>
      <td>CABLE CROSSOVER</td>
      <td>FOCUS ON BRINGING YOUR INNER ELBOWS TOGETHER - NOT YOUR HANDS</td>
    </tr>
    <tr>
      <td>CABLE LATERAL RAISE</td>
      <td>3</td>
      <td>8</td>
      <td>8</td>
      <td>1-2 MIN</td>
      <td>DUMBBELL LATERAL RAISES</td>
      <td>FOCUS ON SQUEEZING YOUR LATERAL DELT TO MOVE THE WEIGHT</td>
    </tr>
    <tr>
      <td>CABLE TRICEP PUSHDOWNS</td>
      <td>3</td>
      <td>15</td>
      <td>8</td>
      <td>1-2 MIN</td>
      <td>CABLE TRICEPS KICKBACK</td>
      <td></td>
    </tr>
    <tr>
      <td>(OPTIONAL) ABS WORKOUT</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default PushDay;
