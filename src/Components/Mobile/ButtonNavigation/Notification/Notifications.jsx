import React from 'react';
import './Notification.css';
import { FaArrowLeft, FaEllipsisV, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Notifications = () => {
  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <FaArrowLeft className="icon" />
        <h2>Transactions History</h2>
        <FaEllipsisV className="icon" />
      </div>
      <div className="notifications-date-range">
        <span>Mar 26 - Apr 26</span>
        <div className="date-select">
          <span>1 Month</span>
        </div>
      </div>
      <div className="notifications-summary">
        <div className="summary-item">
          <FaArrowUp className="icon up-icon" />
          <div>
            <p>Spending</p>
            <p>$980</p>
          </div>
        </div>
        <div className="summary-item">
          <FaArrowDown className="icon down-icon" />
          <div>
            <p>Income</p>
            <p>$2,860</p>
          </div>
        </div>
      </div>
      <div className="notifications-tabs">
        <span>All</span>
        <span>Income</span>
        <span>Expense</span>
      </div>
      <div className="notifications-list">
        <div className="list-item">
          <div className="item-icon green"></div>
          <div className="item-info">
            <p>Freelance Work</p>
            <span>Apr 26</span>
          </div>
          <p className="item-amount income">+$2,600</p>
        </div>
        <div className="list-item">
          <div className="item-icon orange"></div>
          <div className="item-info">
            <p>Food & Beverages</p>
            <span>Apr 25</span>
          </div>
          <p className="item-amount expense">-$48</p>
        </div>
        <div className="list-item">
          <div className="item-icon purple"></div>
          <div className="item-info">
            <p>Dropbox</p>
            <span>Apr 25</span>
          </div>
          <p className="item-amount expense">-$26/month</p>
        </div>
        <div className="list-item">
          <div className="item-icon blue"></div>
          <div className="item-info">
            <p>Transportation</p>
            <span>Apr 20</span>
          </div>
          <p className="item-amount expense">-$6</p>
        </div>
        <div className="list-item">
          <div className="item-icon blue"></div>
          <div className="item-info">
            <p>Payment from Yogie</p>
            <span>Apr 10</span>
          </div>
          <p className="item-amount income">+$860</p>
        </div>
        <div className="list-item">
          <div className="item-icon purple"></div>
          <div className="item-info">
            <p>Travelling</p>
            <span>Apr 9</span>
          </div>
          <p className="item-amount expense">-$260</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
