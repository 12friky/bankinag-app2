import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';
import Logo from '../../../../reaoure/lo.jpeg'; // Ensure the image path is correct


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="Logo" className="logo" />
        <h2 className='Prompt'>Please Login</h2>
        <form>
          <div className="input-group">
            <label>Username</label>
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Username" />
            </div>
          </div>
          <div className="input-group">
            <label>Single Sign-On Password</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <button type="submit" className="login-button">Log in</button>
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
          You are authorized to use this System for approved business purposes only.
        </p>
      </div>
    </div>
  );
};

export default Login;
