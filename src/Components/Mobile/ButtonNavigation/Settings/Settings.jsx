import React from 'react';
import UserProfile from '../../../../../reaoure/profile.jfif';
import NavComponent from '../../NavComponent/NavComponent';
import './Settings.css';
import { useNavigate } from 'react-router-dom';


const Settings = () => {
    const navigate = useNavigate(); 

    const handleSignup = () => {
        navigate('/'); 
      };
    
  return (
    <div className="settings-container">
      <div className="profile-section">
        <img src={UserProfile} alt="User Profile" className="profile-image" />
        <div className="profile-info">
          <h2>David Robinson</h2>
          {/* <p className="joined-info">Joined 1 year ago</p> */}
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
          {/* <div className="setting-item">
            <span>Dark Mode</span>
            <span>&gt;</span>
          </div> */}
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
          {/* <div className="setting-item">
            <span>Help & Support</span>
            <span>&gt;</span>
          </div> */}
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
        <button className="signout-button" onClick={handleSignup}>Sign Out</button>
      </div>

<NavComponent />
    </div>
  );
};

export default Settings;
