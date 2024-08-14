import React from 'react'
import { FaReceipt,FaHistory,FaExchangeAlt, FaBitcoin, FaMoneyCheckAlt, FaUserPlus, FaCreditCard, FaMoneyBillWave, FaHome, FaBell, FaUserCircle, FaCogs, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './NavComponent.css'

const NavComponent = () => {
const navigate = useNavigate(); 

    
    const handleNotificationClick = () => {
        navigate('/notifications'); 
      };
    
      const handleSettingsClick = () => {
        navigate('/settings'); 
      };
      const handleHomeClick = () => {
        navigate('/dashboard'); 
      };
      const handleBellClick = () => {
        navigate('/bell'); 
      };
  return (
    <div className="bottomNavigation">
    <FaHome className="navIcon"  onClick={handleHomeClick} />
    <FaHistory className="navIcon" onClick={handleNotificationClick} />
    <FaBell className="navIcon"  onClick={handleBellClick} /> {/* Add onClick event */}
    <FaCogs className="navIcon" onClick={handleSettingsClick} />
  </div>
  )
}

export default NavComponent
