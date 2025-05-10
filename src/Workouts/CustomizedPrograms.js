import React, { useState } from 'react';
import './WorkoutProgram.css';
// src/Workouts/CustomizedPrograms.js
import { auth, db } from '../firebase'; // Adjust the path based on your folder structure


const CustomizedPrograms = () => {
  const [selectedSplit, setSelectedSplit] = useState(null);
  const [programData, setProgramData] = useState({});

  const workoutDays = {
    upperLower: ['Upper Day 1', 'Upper Day 2', 'Lower Day 1', 'Lower Day 2'],
    pushPullLegs: ['Push Day 1', 'Push Day 2', 'Pull Day 1', 'Pull Day 2', 'Leg Day 1', 'Leg Day 2'],
  };

  const handleSplitSelect = (split) => {
    setSelectedSplit(split);
    const days = workoutDays[split];
    const newData = {};
    days.forEach((day) => {
      newData[day] = [{ exercise: '', sets: '', reps: '', rpe: '', rest: '', notes: '' }];
    });
    setProgramData(newData);
  };

  const handleInputChange = (day, index, field, value) => {
    const updatedDay = [...programData[day]];
    updatedDay[index][field] = value;
    setProgramData({ ...programData, [day]: updatedDay });
  };

  const handleAddExercise = (day) => {
    setProgramData({
      ...programData,
      [day]: [...programData[day], { exercise: '', sets: '', reps: '', rpe: '', rest: '', notes: '' }],
    });
  };

  const handleRemoveExercise = (day, index) => {
    const updatedDay = [...programData[day]];
    updatedDay.splice(index, 1);
    setProgramData({ ...programData, [day]: updatedDay });
  };

const handleSaveProgram = async () => {
  if (!auth.currentUser) {
    alert('You need to be logged in to save a program.');
    return;
  }

  try {
    // Prepare the data to be saved
    const program = {
      name: programData.name,
      description: programData.description,
      userId: auth.currentUser.uid, // Save under the logged-in user's UID
      savedAt: new Date(),
    };

    // Save the program to Firestore
    const programsRef = db.collection('programs');
    await programsRef.add(program);

    alert('Program saved successfully!');
  } catch (error) {
    console.error('Error saving program to Firebase:', error);
    alert('Error saving program, please try again.');
  }
};
  return (
    <div className="custom-program-container">
      <h1>Create Your Own Workout Program</h1>
      <div className="program-selection">
        <div
          className={`program-card ${selectedSplit === 'upperLower' ? 'selected' : ''}`}
          onClick={() => handleSplitSelect('upperLower')}
        >
          <h2>Upper/Lower Split</h2>
          <p>2 Upper & 2 Lower workout days</p>
        </div>
        <div
          className={`program-card ${selectedSplit === 'pushPullLegs' ? 'selected' : ''}`}
          onClick={() => handleSplitSelect('pushPullLegs')}
        >
          <h2>Push/Pull/Legs Split</h2>
          <p>2 Push, 2 Pull & 2 Leg workout days</p>
        </div>
      </div>

      {selectedSplit && (
        <div className="workout-tables">
          <h2>{selectedSplit === 'upperLower' ? 'Upper/Lower Split' : 'Push/Pull/Legs Split'}</h2>

          {workoutDays[selectedSplit].map((day) => (
            <div key={day} className="workout-day-table">
              <h3>{day}</h3>
              <table>
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>RPE / %RM</th>
                    <th>Rest</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {programData[day].map((entry, idx) => (
                    <tr key={idx}>
                      <td><input type="text" value={entry.exercise} onChange={(e) => handleInputChange(day, idx, 'exercise', e.target.value)} /></td>
                      <td><input type="text" value={entry.sets} onChange={(e) => handleInputChange(day, idx, 'sets', e.target.value)} /></td>
                      <td><input type="text" value={entry.reps} onChange={(e) => handleInputChange(day, idx, 'reps', e.target.value)} /></td>
                      <td><input type="text" value={entry.rpe} onChange={(e) => handleInputChange(day, idx, 'rpe', e.target.value)} /></td>
                      <td><input type="text" value={entry.rest} onChange={(e) => handleInputChange(day, idx, 'rest', e.target.value)} /></td>
                      <td><input type="text" value={entry.notes} onChange={(e) => handleInputChange(day, idx, 'notes', e.target.value)} /></td>
                      <td><button onClick={() => handleRemoveExercise(day, idx)} className="delete-btn">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => handleAddExercise(day)} className="add-btn">+ Add Exercise</button>
            </div>
          ))}
          <button onClick={handleSaveProgram} className="save-btn">Save Program</button>
        </div>
      )}
    </div>
  );
};

export default CustomizedPrograms;
