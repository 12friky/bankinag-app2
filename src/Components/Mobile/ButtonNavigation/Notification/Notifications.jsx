import React from 'react';
import './Notification.css';
import { FaArrowLeft, FaEllipsisV, FaArrowUp, FaArrowDown, FaBriefcase, FaUtensils, FaDropbox, FaBusAlt, FaMoneyCheckAlt, FaPlane } from 'react-icons/fa';
import NavComponent from '../../NavComponent/NavComponent';

const Notifications = () => {
  return (
    <div className="notifications-container">
      {/* Header */}
      <div className="notifications-header">
        {/* <FaArrowLeft className="icon" /> */}
        <h2>Transactions History</h2>
        {/* <FaEllipsisV className="icon" /> */}
      </div>

      {/* Date Range Selector */}
      <div className="notifications-date-range">
        <span className="date-range">Mar 26 - Apr 26</span>
        <div className="date-select">
          <span>1 Month</span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="notifications-summary">
        <div className="summary-item">
          <FaArrowUp className="icon up-icon" />
          <div>
            <p>Spending</p>
            <p>$9,800,000</p>
          </div>
        </div>
        <div className="summary-item">
          <FaArrowDown className="icon down-icon" />
          <div>
            <p>Income</p>
            <p>$2,860,100</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="notifications-tabs">
        <span className="tab active-tab">All</span>
        {/* <span className="tab">Income</span>
        <span className="tab">Expense</span> */}
      </div>

      {/* Transaction List */}
      <div className="notifications-list">
        <div className="list-item">
          <div className="item-icon green">
            <FaBriefcase className="transaction-icon" />
          </div>
          <div className="item-info">
            <p>Freelance Work</p>
            <span>Apr 26</span>
          </div>
          <p className="item-amount income">+$2,600</p>
        </div>
        <div className="list-item">
          <div className="item-icon orange">
            <FaUtensils className="transaction-icon" />
          </div>
          <div className="item-info">
            <p>Food & Beverages</p>
            <span>Apr 25</span>
          </div>
          <p className="item-amount expense">-$48</p>
        </div>
        <div className="list-item">
          <div className="item-icon purple">
            <FaDropbox className="transaction-icon" />
          </div>
          <div className="item-info">
            <p>Dropbox</p>
            <span>Apr 25</span>
          </div>
          <p className="item-amount expense">-$26/month</p>
        </div>
        <div className="list-item">
          <div className="item-icon blue">
            <FaBusAlt className="transaction-icon" />
          </div>
          <div className="item-info">
            <p>Transportation</p>
            <span>Apr 20</span>
          </div>
          <p className="item-amount expense">-$6</p>
        </div>
        <div className="list-item">
          <div className="item-icon blue">
            <FaMoneyCheckAlt className="transaction-icon" />
          </div>
          <div className="item-info">
            <p>Payment from Yogie</p>
            <span>Apr 10</span>
          </div>
          <p className="item-amount income">+$860</p>
        </div>
        <div className="list-item">
          <div className="item-icon purple">
            <FaPlane className="transaction-icon" />
          </div>
          <div className="item-info">
            <p>Travelling</p>
            <span>Apr 9</span>
          </div>
          <p className="item-amount expense">-$260</p>
        </div>
      </div>
      <NavComponent />
    </div>
  );
};

export default Notifications;
