import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProgramDetailPage.css';

function ProgramDetailPage() {
  const { programName } = useParams();  // Access program name from URL
  const [programData, setProgramData] = useState(null);

  // Fetch the program data from localStorage using the programName from URL
  useEffect(() => {
    const program = localStorage.getItem(programName);
    if (program) {
      setProgramData(JSON.parse(program));
    }
  }, [programName]);

  return (
    <div className="program-detail-container">
      {programData ? (
        <div className="program-detail">
          <h2>{programName}</h2>
          <div className="program-details">
            <h3>Program Overview</h3>
            <p>{programData.overview}</p>  {/* Assuming your programData has an 'overview' field */}
            <h3>Exercises</h3>
            <ul>
  {programData.exercises && programData.exercises.length > 0 ? (
    programData.exercises.map((exercise, index) => (
      <li key={index}>{exercise}</li>
    ))
  ) : (
    <li>No exercises found.</li>
  )}
</ul>

          </div>
        </div>
      ) : (
        <p>Program not found.</p>
      )}
    </div>
  );
}

export default ProgramDetailPage;
