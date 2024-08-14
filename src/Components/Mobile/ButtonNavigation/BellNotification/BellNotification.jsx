import React from 'react';
import { FaBell, FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
import './BellNotification.css';
import NavComponent from '../../NavComponent/NavComponent';

const notifications = [
  { id: 1, type: 'success', message: 'Your transaction was successful.', timestamp: '2 mins ago' },
  { id: 2, type: 'error', message: 'Transaction failed. Please try again.', timestamp: '10 mins ago' },
  { id: 3, type: 'warning', message: 'Account balance is low.', timestamp: '1 hour ago' },
  { id: 4, type: 'success', message: 'Payment received from John Doe.', timestamp: '3 hours ago' },
  { id: 4, type: 'success', message: 'Payment received from John Doe.', timestamp: '3 hours ago' },
  { id: 4, type: 'success', message: 'Payment received from John Doe.', timestamp: '3 hours ago' },
  { id: 4, type: 'success', message: 'Payment received from John Doe.', timestamp: '3 hours ago' },

  { id: 5, type: 'warning', message: 'Subscription renewal due soon.', timestamp: '5 hours ago' },
];

const BellNotification = () => {

    
    
    const handleHomeClick = () => {
        navigate('/dashboard'); 
      };
  return (
    <div className="notification-container">
      <header className="notification-header">
        <FaBell size={26} />
        <h2 className='notHeader'>Notifications</h2>
      </header>
      <div className="notification-list">
        {notifications.map(notification => (
          <div key={notification.id} className={`notification-item ${notification.type}`}>
            <div className="notification-icon">
              {notification.type === 'success' && <FaCheckCircle size={20} />}
              {notification.type === 'error' && <FaTimesCircle size={20} />}
              {notification.type === 'warning' && <FaExclamationCircle size={20} />}
            </div>
            <div className="notification-content">
              <p>{notification.message}</p>
              <span className="notification-timestamp">{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="notification-footer">
      </div>

      <NavComponent/>
    </div>
  );
}

export default BellNotification;
