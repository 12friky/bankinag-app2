import React, { useState } from 'react'; // Import useState for managing state
import './Dashboard.css';
import Logo from '../../../../reaoure/lo.jpeg';
import { FaExchangeAlt, FaBitcoin, FaMoneyCheckAlt, FaUserPlus, FaCreditCard, FaMoneyBillWave, FaHome, FaBell, FaUserCircle, FaCogs, FaComments } from 'react-icons/fa';

// Corrected 'reaoure' to 'resource'
import Flag from '../../../../reaoure/flag.png';
import Profile from '../../../../reaoure/profile.jfif'; // Corrected 'reaoure' to 'resource'
 // Corrected 'reaoure' to 'resource'

 
 const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChatClick = () => {
    alert("Redirecting to chat with an agent...");
    // You can replace the alert with your chat function or a redirect to the chat page
  };

  return (
    <div className="dashboardContainer">
      {/* Top Bar */}
      <div className="topBar">
        <div className="languageSection">
          <img src={Flag} alt="Language Flag" className="flagIcon" />
          <p className="selectedLanguage">English</p>
        </div>
        {/* <img src={Logo} alt="Logo" className="logo" /> */}
        <div className="profileSection">
          <img src={Profile} alt="Profile" className="profileIcon" />
          <div className="notificationBadge">0</div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="balanceSection">
        <h2 className='AccountType'>Savings</h2>
        <h1 className="balance">$7,000,000.00</h1>
        <p>Account Number: •••• 1187</p>
        <div className="creditDebitInfo">
          <p>Total Credit <br></br> (JUL 2024): $0.00</p>
          <p>Total Debit <br></br>(JUL 2024): $0.00</p>
        </div>
      </div>

      {/* Actions Grid */}
      <div className="actionsGrid">
        <div className="actionItem">
          <FaExchangeAlt className="actionIcon" />
          <p>Wire Transfer</p>
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
          <p>Buy Crypto</p>
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
          <p>Card Deposit</p>
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
        <FaBell className="navIcon" />
        <FaUserCircle className="navIcon" />
        <FaCogs className="navIcon" />
      </div>
    </div>
  );
};

export default Dashboard;