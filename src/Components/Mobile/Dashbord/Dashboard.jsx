import React, { useState, useEffect } from 'react'; // Import useState and useEffect for managing state and side effects
import './Dashboard.css';
import NavComponent from '../NavComponent/NavComponent';
import { FaExchangeAlt, FaBitcoin, FaMoneyCheckAlt, FaUserPlus, FaCreditCard, FaMoneyBillWave, FaHome, FaBell, FaUserCircle, FaCogs, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem('userEmail'); // Get email from local storage

      if (email) {
        try {
          // Use environment variable for API URL
          const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
          const response = await axios.get(`${apiUrl}/api/userdata`, {
            params: { email },
          });
          setUser(response.data); // Set user data in state
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChatClick = () => {
    const supportEmail = 'francisngumah91@gmail.com'; // Replace with your email address
    const subject = ' what is your Inquiry';
    const body = 'Hello,\n\nI would like to inquire about...'; // Pre-fill the email body if needed
  
    // Construct the mailto link
    const mailtoLink = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Redirect to the email client
    window.location.href = mailtoLink;
  };
  

  const handleNotificationClick = () => {
    navigate('/notifications'); // Redirect to the notification page
  };

  const handleSettingsClick = () => {
    navigate('/settings'); 
  };

  // Function to format account number
  const formatAccountNumber = (accountNumber) => {
    if (accountNumber.length <= 8) return accountNumber;
    const firstFour = accountNumber.slice(0, 4);
    const lastFour = accountNumber.slice(-4);
    return `${firstFour} •••• ${lastFour}`;
  };

  return (
    <div className="dashboardContainer">
      {/* Top Bar */}
      <div className="topBar">
        <div className="languageSection">
          <p className="selectedLanguage">Hi {user ? user.name : 'Loading...'}</p>
        </div>
        <div className="profileSection">
          <img
            src={user ? `${import.meta.env.VITE_API_URL}${user.profileImage}` : 'defaultProfileImage.jpg'}
            alt="Profile"
            className="profileIcon"
          />
          <div className="notificationBadge" onClick={handleNotificationClick}>0</div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="balanceSection">
        <h2 className='AccountType'>Current Balance</h2>
        <h1 className="balance">{user ? `$${user.amountDeposit.toFixed(2)}` : 'Loading...'}</h1> {/* Display amountDeposit */}
        <p>Account Number: {user ? formatAccountNumber(user.bankAccount) : 'Loading...'}</p> {/* Format account number */}
        <div className="creditDebitInfo">
          <p>Credit Card Balance  : $22,874.43</p>
          <p>Total Debit $12,768.00</p>
        </div>
      </div>

      {/* Actions Grid */}
      <div className="actionsGrid">
        <div className="actionItem">
          <FaExchangeAlt className="actionIcon" />
          <p>Wire <br/> Transfer</p>
        </div>
        <div className="actionItem">
          <FaExchangeAlt className="actionIcon" />
          <p>Local Transfer</p>
        </div>
        <div className="actionItem">
          <FaExchangeAlt className="actionIcon" />
          <p>Internal Transfer</p>
        </div>
        <hr className="actionDivider" />
        <div className="actionItem">
          <FaBitcoin className="actionIcon" />
          <p>Buy <br/> Crypto</p>
        </div>
        <div className="actionItem">
          <FaMoneyCheckAlt className="actionIcon" />
          <p>Pay Bills</p>
        </div>
        <div className="actionItem">
          <FaUserPlus className="actionIcon" />
          <p>Add Beneficiary</p>
        </div>
        <hr className="actionDivider" />
        <div className="actionItem">
          <FaCreditCard className="actionIcon" />
          <p>Card <br/> Deposit</p>
        </div>
        <div className="actionItem">
          <FaMoneyBillWave className="actionIcon" />
          <p>Crypto Deposit</p>
        </div>
        <div className="actionItem">
          <FaMoneyCheckAlt className="actionIcon" />
          <p>Check Deposit</p>
        </div>
      </div>

      {/* Chat Button */}
      <div className="chatButton" onClick={handleChatClick}>
        <FaComments className="chatIcon" />
      </div>
      <NavComponent />
    </div>
  );
};

export default Dashboard;