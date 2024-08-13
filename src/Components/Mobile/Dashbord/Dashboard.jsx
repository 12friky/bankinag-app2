import React, { useState } from 'react'; // Import useState for managing state
import './Dashboard.css';
import Logo from '../../../../reaoure/lo.jpeg';
import { FaExchangeAlt, FaBitcoin, FaMoneyCheckAlt, FaUserPlus, FaCreditCard, FaMoneyBillWave, FaHome, FaBell, FaUserCircle, FaCogs, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Corrected 'reaoure' to 'resource'
import Flag from '../../../../reaoure/flag.png';
import Profile from '../../../../reaoure/profile.jfif'; // Corrected 'reaoure' to 'resource'
 

 
const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChatClick = () => {
    alert("Redirecting to chat with an agent...");
    // You can replace the alert with your chat function or a redirect to the chat page
  };

  const handleNotificationClick = () => {
    navigate('/notifications'); // Redirect to the notification page
  };

  return (
    <div className="dashboardContainer">
      {/* Top Bar */}
      <div className="topBar">
        <div className="languageSection">
          <img src={Flag} alt="Language Flag" className="flagIcon" />
          <p className="selectedLanguage">English</p>
        </div>
        <div className="profileSection">
          <img src={Profile} alt="Profile" className="profileIcon" />
          <div className="notificationBadge" onClick={handleNotificationClick}>0</div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="balanceSection">
        <h2 className='AccountType'>Current Balance</h2>
        <h1 className="balance">$700,200.00</h1>
        <p>Account Number: •••• 1187</p>
        <div className="creditDebitInfo">
          <p>Credit Card Balance <br></br> (JUL 2024): $22,874.43</p>
          <p>Total Debit <br></br>(JUL 2024): $723074.00</p>
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

      {/* Bottom Navigation */}
      <div className="bottomNavigation">
        <FaHome className="navIcon" />
        <FaBell className="navIcon" onClick={handleNotificationClick} /> {/* Add onClick event */}
        <FaUserCircle className="navIcon" />
        <FaCogs className="navIcon" />
      </div>
    </div>
  );
};

export default Dashboard;