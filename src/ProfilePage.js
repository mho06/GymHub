import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    username: '',
    age: '',
    gender: '',
    country: '',
    lastUsernameChange: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for save operation
  const [saved, setSaved] = useState(false); // State to track if profile is saved

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile({ ...docSnap.data() });
        }
      };
      fetchProfile();
    }
  }, [user]);

  const handleEditToggle = () => {
    setEditMode(true);
    setError('');
  };

  const handleSave = async () => {
    setLoading(true); // Set loading state to true when saving
    setError(''); // Clear any previous error

    if (profile.age < 18) {
      setLoading(false);
      return setError('Age must be above 18');
    }

    if (profile.gender !== 'male' && profile.gender !== 'female') { // Fixed the gender validation logic
      setLoading(false);
      return setError('Gender must be either "male" or "female"');
    }

    const now = new Date();
    const lastChange = profile.lastUsernameChange?.toDate?.() || new Date(0);
    const thirtyDays = 1000 * 60 * 60 * 24 * 30;

    if (now - lastChange < thirtyDays) {
      setProfile(prev => ({ ...prev, username: prev.username }));
    } else {
      profile.lastUsernameChange = serverTimestamp();
    }

    try {
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, {
        username: profile.username,
        age: profile.age,
        gender: profile.gender,
        country: profile.country,
        lastUsernameChange: profile.lastUsernameChange
      });
      setSaved(true); // Mark profile as saved
      setLoading(false); // Set loading to false
      setError(''); // Clear error
    } catch (err) {
      setLoading(false); // Set loading to false on error
      setError('Failed to save. Try again.');
    }
  };

  const handleBackToHome = () => {
    navigate('/'); // Navigate to home page
  };

  const handleCancel = () => {
    navigate("/"); // Navigate to home/dashboard page
  };

  return (
    <div className="profile-page-container">
      <h2>Profile</h2>
      {error && <p className="error-message">{error}</p>}
      {saved ? (
        <div className="saved-message">
          <p>Your profile has been saved!</p>
          <button className="back-btn" onClick={handleBackToHome}>Back to Home</button>
        </div>
      ) : (
        <>
          <div className="profile-field">
            <label>Email:</label>
            <p>{user?.email}</p>
          </div>
          <div className="profile-field">
            <label>Username:</label>
            {editMode ? (
              <input
                type="text"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              />
            ) : (
              <p>{profile.username || 'Not set'}</p>
            )}
          </div>
          <div className="profile-field">
            <label>Age:</label>
            {editMode ? (
              <input
                type="number"
                value={profile.age || ''}
                onChange={(e) => setProfile({ ...profile, age: e.target.value })}
              />
            ) : (
              <p>{profile.age || 'Not set'}</p>
            )}
            {editMode && <small className="age-note">You must be 18 or older.</small>}
          </div>
          <div className="profile-field">
            <label>Gender:</label>
            {editMode ? (
              <select
                value={profile.gender || 'male'}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              <p>{profile.gender || 'Not set'}</p>
            )}
          </div>
          <div className="profile-field">
            <label>Country:</label>
            {editMode ? (
              <input
                type="text"
                value={profile.country || ''}
                onChange={(e) => setProfile({ ...profile, country: e.target.value })}
              />
            ) : (
              <p>{profile.country || 'Not set'}</p>
            )}
          </div>
          {!editMode ? (
            <button className="edit-btn" onClick={handleEditToggle}>Edit</button>
          ) : (
            <button className="save-btn" onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
          )}
          {/* Button to go back to home/dashboard */}
        <button onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
