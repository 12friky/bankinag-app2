import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Mobile/Login/Login'; 

const MobileComponent = () => {
  return (
    <Router>
      <div>
        <Login />
      </div>
    </Router>
  );
};

export default MobileComponent;
