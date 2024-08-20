import React, { useState } from 'react';
import { FaUser, FaLock,FaUserPlus, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

import './AdminAuth.css';
import Logo from '../../../../reaoure/lo.jpeg'; // Ensure the image path is correct


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fake credentials for demonstration
    const fakeEmail = 'francisngumah91@gmail.com';
    const fakePassword = 'Sticker@100';

    // Check credentials
    if (email === fakeEmail && password === fakePassword) {
      // Navigate to the 'sign-u' page upon successful login
      navigate('/signup');
    } else {
      // Display an error message if credentials are incorrect
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      {error && <div className="error-message">{error}</div>}
      <div className="login-box">
        <img src={Logo} alt="Logo" className="logo" />
        <h2 className="Prompt">Administrator Logins</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? <span className="loading-spinner"></span> : 'Administrator'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;