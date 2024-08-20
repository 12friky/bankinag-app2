import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaHome, FaMoneyCheck } from 'react-icons/fa';
import axios from 'axios'; // Import axios for making HTTP requests
import Logo from '../../../../reaoure/lo.jpeg';
import './SignUp.css';

const SignUp = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    bankAccount: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    amountDeposit: '', // Add amountDeposit to formData
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file); // Set the file object
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Normalize email and other fields to lowercase
    const normalizedFormData = {
      ...formData,
      email: formData.email.toLowerCase(),
      name: formData.name.toUpperCase(),
      bankAccount: formData.bankAccount.toLowerCase(),
      address: formData.address.toLowerCase(),
    };

    const data = new FormData();
    data.append('name', normalizedFormData.name);
    data.append('bankAccount', normalizedFormData.bankAccount);
    data.append('email', normalizedFormData.email);
    data.append('password', normalizedFormData.password);
    data.append('phoneNumber', normalizedFormData.phoneNumber);
    data.append('address', normalizedFormData.address);
    data.append('amountDeposit', normalizedFormData.amountDeposit); // Append amountDeposit
    if (profileImage) {
      data.append('profileImage', profileImage); // Append the image file
    }
  
    try {
      // Use environment variable for API URL
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/signup`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
  
      // Reset the form fields and file input
      setFormData({
        name: '',
        bankAccount: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        amountDeposit: '', // Reset amountDeposit
      });
      setProfileImage(null);
      document.getElementById('upload-input').value = null; // Clear the file input
    } catch (error) {
      alert('Failed to register user');
    }
  };

  return (
    <div className="signup-container">
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="upload-container">
          <label htmlFor="upload-input" className="image-preview">
            {profileImage ? (
              <img src={URL.createObjectURL(profileImage)} alt="Profile" />
            ) : (
              <div className="placeholder">Upload Image</div>
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            id="upload-input"
            className="upload-input"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <div className="input-container">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="bankAccount">Bank Account</label>
          <div className="input-container">
            <input
              type="text"
              id="bankAccount"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="amountDeposit">Amount Deposit</label>
          <div className="input-container">
            <input
              type="number"
              id="amountDeposit"
              name="amountDeposit"
              value={formData.amountDeposit}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="input-container">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Your Address</label>
          <div className="input-container">
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="note">
          * Autel suscipit a pellentesque sit amet porttitor eget dolor morbi non
        </p>
        <button type="submit" className="save-btn">Sign UP</button>
      </form>
    </div>
  );
};

export default SignUp;