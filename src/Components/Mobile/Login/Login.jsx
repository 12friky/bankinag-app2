import React, { useState } from 'react';
import { FaUser, FaLock, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

import './Login.css';
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

    const normalizedEmail = email.toLowerCase();

    try {
      // Get API URL from Vite's environment variables
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      const response = await axios.post(`${apiUrl}/api/signin`, {
        email: normalizedEmail,
        password,
      });
      console.log('API URL:', import.meta.env.VITE_API_URL);

      if (response.data.success) {
        localStorage.setItem('userEmail', normalizedEmail);
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Invalid email or password.');
      }
    } catch (error) {
      setError('Failed to authenticate. Please try again.');
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  const AdminAuth = () => {
    navigate('/adminauth');
  };

  return (
    <div className="login-container">
      {error && <div className="error-message">{error}</div>}
      <div className="login-box">
        <img src={Logo} alt="Logo" className="logo" />
        <h2 className="Prompt">
          Please Login{' '}
          <span>
            <FaUserPlus className="input-icons" onClick={AdminAuth} />
          </span>
        </h2>
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
            {loading ? <span className="loading-spinner"></span> : 'Log in'}
          </button>
          <div className="single-sign-on">
            <input type="checkbox" id="singleSignOn" />
            <label htmlFor="singleSignOn">Single Sign-on</label>
          </div>
        </form>
        <div className="link-group">
          <a href="#">Change Password</a>
          <a href="#">Reset Password</a>
        </div>
        <p className="disclaimer">
          You are authorized to use this System for approved business purposes only...
        </p>
      </div>
    </div>
  );
};

export default Login;