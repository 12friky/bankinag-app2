import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Mobile/Login/Login';
import Notifications from './Components/Mobile/ButtonNavigation/Notification/Notifications';
import Settings from './Components/Mobile/ButtonNavigation/Settings/Settings'
import Dashboard from './Components/Mobile/Dashbord/Dashboard'; 
import BellNotification from './Components/Mobile/ButtonNavigation/BellNotification/BellNotification';
import OtpPage from './Components/Mobile/OtpPage/OtpPage';
import AdminAuth from './Components/Mobile/AdminAuth/AdminAuth';
import SignUp from './Components/Mobile/SignUp/SignUp';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} /> 
        <Route path="/otpPage" element={<OtpPage />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/notifications" element={<Notifications />} /> 
        <Route path="/settings" element={<Settings />} />
        <Route path="/bell" element={<BellNotification/>} />
        <Route path="/adminauth" element={<AdminAuth/>} />



      </Routes>
    </Router>
  );
};

export default AppRouter;
