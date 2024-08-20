import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavComponent from '../../NavComponent/NavComponent';
import './Settings.css';

const Settings = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate(); 

  useEffect(() => {
    const checkAuth = () => {
      const email = localStorage.getItem('userEmail');
      if (!email) {
        navigate('/'); // Redirect to login page if no email found
      }
    };

    checkAuth();

    const fetchUserData = async () => {
      const email = localStorage.getItem('userEmail');

      if (email) {
        try {
          // Use environment variable for API URL
          const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
          const response = await axios.get(`${apiUrl}/api/userdata`, {
            params: { email },
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleSignOut = async () => {
    setLoading(true); // Set loading to true when sign out starts

    localStorage.removeItem('userEmail');
    sessionStorage.removeItem('authToken');

    // Wait for 2 seconds before redirecting
    setTimeout(() => {
      setLoading(false); // Set loading to false once the delay is over
      navigate('/'); // Redirect to login page
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="settings-container">
      <div className="profile-section">
        <img 
          src={user ? `${import.meta.env.VITE_API_URL}${user.profileImage}` : 'defaultProfileImage.jpg'} 
          alt="User Profile" 
          className="profile-image" 
        />
        <div className="profile-info">
          <h2>{user ? user.name : 'Loading...'}</h2>
        </div>
      </div>

      <div className="settings-section">
        <div className="profile-settings">
          <h3>Profile</h3>
          <div className="setting-item">
            <span>Manage User</span>
            <span>&gt;</span>
          </div>
        </div>

        <div className="settings-group">
          <h3>Settings</h3>
          <div className="setting-item">
            <span>Notifications</span>
            <span>&gt;</span>
          </div>
          <div className="setting-item">
            <span>Change Password</span>
            <span>&gt;</span>
          </div>
          <div className="setting-item">
            <span>Biometric Authentication</span>
            <span>&gt;</span>
          </div>
          <div className="setting-item">
            <span>Two-Factor Authentication</span>
            <span>&gt;</span>
          </div>
          <div className="setting-item">
            <span>Linked Accounts</span>
            <span>&gt;</span>
          </div>
          <div className="setting-item">
            <span>Language & Region</span>
            <span>&gt;</span>
          </div>
        </div>

        <div className="support-section">
          <h3>Support</h3>
          <div className="setting-item">
            <span>Terms & Conditions</span>
            <span>&gt;</span>
          </div>
          <div className="setting-item">
            <span>Privacy Policy</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>

      <div className="signout-section">
        <button className="signout-button" onClick={handleSignOut} disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Sign Out'}
        </button>
      </div>

      <NavComponent />
    </div>
  );
};

export default Settings;