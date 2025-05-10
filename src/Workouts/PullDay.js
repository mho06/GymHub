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
            <td>1 ARM LAT PULL-IN</td>
            <td>2</td>
            <td>15-20</td>
            <td>5</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>LIGHT SETS, DRIVE ELBOW DOWN AND IN TOWARD SIDE, LATERALLY FLEX INTO THE DIRECTION OF PULL</td>
          </tr>
          <tr>
            <td>PULL-UP</td>
            <td>4</td>
            <td>6-8</td>
            <td>7</td>
            <td>2-3 MIN</td>
            <td></td>
            <td>PULL YOUR ELBOWS DOWN AND IN, MINIMIZE SWINGING</td>
          </tr>
          <tr>
            <td>PENDLAY ROW</td>
            <td>3</td>
            <td>8-10</td>
            <td>7</td>
            <td>2-3 MIN</td>
            <td></td>
            <td>INITIATE THE MOVEMENT WITH SCAPULAR RETRACTION, PULL TO YOUR LOWER CHEST, KEEP YOUR TORSO MOTIONLESS</td>
          </tr>
          <tr>
            <td>MACHINE HIGH ROW</td>
            <td>3</td>
            <td>10-12</td>
            <td>8</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>FOCUS ON SQUEEZING YOUR LATS</td>
          </tr>
          <tr>
            <td>SEATED FACE PULL</td>
            <td>3</td>
            <td>20</td>
            <td>8</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>PULL YOUR ELBOWS UP AND OUT, RETRACT YOUR SCAPULAE</td>
          </tr>
          <tr>
            <td>A1: REVERSE GRIP EZ BAR CURL</td>
            <td>3</td>
            <td>20</td>
            <td>9</td>
            <td>0 MIN</td>
            <td></td>
            <td>ARCH THE BAR "OUT", NOT "UP". FOCUS ON SQUEEZING YOUR FOREARMS</td>
          </tr>
          <tr>
            <td>A2: SUPINATED EZ BAR CURL</td>
            <td>3</td>
            <td>15</td>
            <td>9</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>ARCH THE BAR "OUT", NOT "UP". FOCUS ON SQUEEZING YOUR BICEPS</td>
          </tr>
          <tr>
            <td>DUMBBELL PREACHER CURL</td>
            <td>3</td>
            <td>12</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>FOCUS ON SQUEEZING YOUR BICEPS TO MOVE THE WEIGHT</td>
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
            <td>NEUTRAL-GRIP PULLDOWN</td>
            <td>3</td>
            <td>10-12</td>
            <td>8</td>
            <td>2-3 MIN</td>
            <td></td>
            <td>PULL YOUR ELBOWS DOWN AGAINST YOUR SIDES</td>
          </tr>
          <tr>
            <td>A1: CABLE SEATED ELBOWS OUT ROW</td>
            <td>3</td>
            <td>10</td>
            <td>8</td>
            <td>0 MIN</td>
            <td></td>
            <td>FOCUS ON SCAPULAR RETRACTION, PULL WITH YOUR ELBOWS UP AND OUT</td>
          </tr>
          <tr>
            <td>A2: CABLE SEATED ROW</td>
            <td>3</td>
            <td>10</td>
            <td>8</td>
            <td>2-3 MIN</td>
            <td></td>
            <td>FOCUS ON SCAPULAR RETRACTION, PULL WITH YOUR ELBOWS DOWN AND IN</td>
          </tr>
          <tr>
            <td>KNEELING STRAIGHT-ARM CABLE PULL-OVER</td>
            <td>3</td>
            <td>15</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>LEAN YOUR TORSO AT A 45° ANGLE, FOCUS ON PULLING THE WEIGHT STRAIGHT DOWN, NOT "IN"</td>
          </tr>
          <tr>
            <td>SNATCH GRIP BARBELL SHRUG</td>
            <td>3</td>
            <td>15</td>
            <td>8</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>USE A 1.5X SHOULDER WIDTH GRIP, CONTROL THE WEIGHT AND "SHRUG UP TO YOUR EARS"</td>
          </tr>
          <tr>
            <td>CABLE REVERSE FLYE</td>
            <td>3</td>
            <td>20</td>
            <td>8</td>
            <td>0 MIN</td>
            <td></td>
            <td>FOCUS ON SWEEPING THE WEIGHT OUT LATERALLY</td>
          </tr>
          <tr>
            <td>SINGLE-ARM CABLE CURL</td>
            <td>3</td>
            <td>12</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>STAND UPRIGHT, KEEP YOUR ELBOW BEHIND YOUR TORSO</td>
          </tr>
          <tr>
            <td>HAMMER CURL</td>
            <td>3</td>
            <td>8</td>
            <td>7</td>
            <td>1-2 MIN</td>
            <td></td>
            <td>FOCUS ON SQUEEZING YOUR BICEPS TO MOVE THE WEIGHT</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default PullDay;
