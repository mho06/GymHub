// File: Workouts/CustomizedPrograms.js
import React, { useState } from 'react';
import './WorkoutProgram.css'; // Make sure you have your styling for cards

const CustomizedPrograms = () => {
  const [selectedSplit, setSelectedSplit] = useState(null); // Upper/Lower or Push/Pull/Legs
  const [programData, setProgramData] = useState({
    upper: { exercises: [], sets: '', reps: '', rpe: '', rest: '', notes: '' },
    lower: { exercises: [], sets: '', reps: '', rpe: '', rest: '', notes: '' },
    push: { exercises: [], sets: '', reps: '', rpe: '', rest: '', notes: '' },
    pull: { exercises: [], sets: '', reps: '', rpe: '', rest: '', notes: '' },
    legs: { exercises: [], sets: '', reps: '', rpe: '', rest: '', notes: '' },
  });

  const handleSplitSelect = (split) => {
    setSelectedSplit(split);
  };

  const handleInputChange = (e, day) => {
    const { name, value } = e.target;
    setProgramData({
      ...programData,
      [day]: { ...programData[day], [name]: value },
    });
  };

  const handleSaveProgram = () => {
    localStorage.setItem('customWorkoutProgram', JSON.stringify(programData));
    alert('Program saved!');
  };

  return (
    <div className="custom-program-container">
      <h1>Create Your Own Workout Program</h1>

      {/* Selection Card */}
      <div className="program-selection">
        <div className="program-card" onClick={() => handleSplitSelect('upperLower')}>
          <h2>Upper/Lower Split</h2>
          <p>Create a workout for Upper and Lower body.</p>
        </div>
        <div className="program-card" onClick={() => handleSplitSelect('pushPullLegs')}>
          <h2>Push/Pull/Legs Split</h2>
          <p>Create a workout for Push, Pull, and Leg days.</p>
        </div>
      </div>

      {/* Show form based on selection */}
      {selectedSplit && (
        <div>
          <h2>Customize your {selectedSplit === 'upperLower' ? 'Upper/Lower' : 'Push/Pull/Legs'} Split</h2>
          
          {/* Upper or Push Day */}
          {selectedSplit === 'upperLower' || selectedSplit === 'pushPullLegs' ? (
            <div>
              <h3>Upper Body Workout</h3>
              <input
                type="text"
                name="exercises"
                value={programData.upper.exercises}
                placeholder="Enter exercises"
                onChange={(e) => handleInputChange(e, 'upper')}
              />
              <input
                type="text"
                name="sets"
                value={programData.upper.sets}
                placeholder="Enter sets"
                onChange={(e) => handleInputChange(e, 'upper')}
              />
              <input
                type="text"
                name="reps"
                value={programData.upper.reps}
                placeholder="Enter reps"
                onChange={(e) => handleInputChange(e, 'upper')}
              />
              <input
                type="text"
                name="rpe"
                value={programData.upper.rpe}
                placeholder="Enter RPE/%RM"
                onChange={(e) => handleInputChange(e, 'upper')}
              />
              <input
                type="text"
                name="rest"
                value={programData.upper.rest}
                placeholder="Enter rest"
                onChange={(e) => handleInputChange(e, 'upper')}
              />
              <input
                type="text"
                name="notes"
                value={programData.upper.notes}
                placeholder="Enter notes"
                onChange={(e) => handleInputChange(e, 'upper')}
              />
            </div>
          ) : null}

          {/* Lower or Leg Day */}
          {selectedSplit === 'upperLower' || selectedSplit === 'pushPullLegs' ? (
            <div>
              <h3>Lower Body Workout</h3>
              <input
                type="text"
                name="exercises"
                value={programData.lower.exercises}
                placeholder="Enter exercises"
                onChange={(e) => handleInputChange(e, 'lower')}
              />
              <input
                type="text"
                name="sets"
                value={programData.lower.sets}
                placeholder="Enter sets"
                onChange={(e) => handleInputChange(e, 'lower')}
              />
              <input
                type="text"
                name="reps"
                value={programData.lower.reps}
                placeholder="Enter reps"
                onChange={(e) => handleInputChange(e, 'lower')}
              />
              <input
                type="text"
                name="rpe"
                value={programData.lower.rpe}
                placeholder="Enter RPE/%RM"
                onChange={(e) => handleInputChange(e, 'lower')}
              />
              <input
                type="text"
                name="rest"
                value={programData.lower.rest}
                placeholder="Enter rest"
                onChange={(e) => handleInputChange(e, 'lower')}
              />
              <input
                type="text"
                name="notes"
                value={programData.lower.notes}
                placeholder="Enter notes"
                onChange={(e) => handleInputChange(e, 'lower')}
              />
            </div>
          ) : null}

          {/* Push/Pull/Legs for each specific day */}
          {selectedSplit === 'pushPullLegs' && (
            <>
              <h3>Push Day Workout</h3>
              <input
                type="text"
                name="exercises"
                value={programData.push.exercises}
                placeholder="Enter exercises"
                onChange={(e) => handleInputChange(e, 'push')}
              />
              <input
                type="text"
                name="sets"
                value={programData.push.sets}
                placeholder="Enter sets"
                onChange={(e) => handleInputChange(e, 'push')}
              />
              <input
                type="text"
                name="reps"
                value={programData.push.reps}
                placeholder="Enter reps"
                onChange={(e) => handleInputChange(e, 'push')}
              />
              <input
                type="text"
                name="rpe"
                value={programData.push.rpe}
                placeholder="Enter RPE/%RM"
                onChange={(e) => handleInputChange(e, 'push')}
              />
              <input
                type="text"
                name="rest"
                value={programData.push.rest}
                placeholder="Enter rest"
                onChange={(e) => handleInputChange(e, 'push')}
              />
              <input
                type="text"
                name="notes"
                value={programData.push.notes}
                placeholder="Enter notes"
                onChange={(e) => handleInputChange(e, 'push')}
              />

              <h3>Pull Day Workout</h3>
              <input
                type="text"
                name="exercises"
                value={programData.pull.exercises}
                placeholder="Enter exercises"
                onChange={(e) => handleInputChange(e, 'pull')}
              />
              <input
                type="text"
                name="sets"
                value={programData.pull.sets}
                placeholder="Enter sets"
                onChange={(e) => handleInputChange(e, 'pull')}
              />
              <input
                type="text"
                name="reps"
                value={programData.pull.reps}
                placeholder="Enter reps"
                onChange={(e) => handleInputChange(e, 'pull')}
              />
              <input
                type="text"
                name="rpe"
                value={programData.pull.rpe}
                placeholder="Enter RPE/%RM"
                onChange={(e) => handleInputChange(e, 'pull')}
              />
              <input
                type="text"
                name="rest"
                value={programData.pull.rest}
                placeholder="Enter rest"
                onChange={(e) => handleInputChange(e, 'pull')}
              />
              <input
                type="text"
                name="notes"
                value={programData.pull.notes}
                placeholder="Enter notes"
                onChange={(e) => handleInputChange(e, 'pull')}
              />

              <h3>LegDay Workout</h3>
<input
type="text"
name="exercises"
value={programData.legs.exercises}
placeholder="Enter exercises"
onChange={(e) => handleInputChange(e, 'legs')}
/>
<input
type="text"
name="sets"
value={programData.legs.sets}
placeholder="Enter sets"
onChange={(e) => handleInputChange(e, 'legs')}
/>
<input
type="text"
name="reps"
value={programData.legs.reps}
placeholder="Enter reps"
onChange={(e) => handleInputChange(e, 'legs')}
/>
<input
type="text"
name="rpe"
value={programData.legs.rpe}
placeholder="Enter RPE/%RM"
onChange={(e) => handleInputChange(e, 'legs')}
/>
<input
type="text"
name="rest"
value={programData.legs.rest}
placeholder="Enter rest"
onChange={(e) => handleInputChange(e, 'legs')}
/>
<input
type="text"
name="notes"
value={programData.legs.notes}
placeholder="Enter notes"
onChange={(e) => handleInputChange(e, 'legs')}
/>
</>
)}      <button onClick={handleSaveProgram}>Save Program</button>
</div>
)}
</div>
);
};

export default CustomizedPrograms;


