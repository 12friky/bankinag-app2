import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Mobile/Login/Login';
import Notifications from './Components/Mobile/ButtonNavigation/Notification/Notifications';
import Settings from './Components/Mobile/ButtonNavigation/Settings/Settings'
import Dashboard from './Components/Mobile/Dashbord/Dashboard'; 
import BellNotification from './Components/Mobile/ButtonNavigation/BellNotification/BellNotification';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Use element prop for React Router v6 */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Use element prop for React Router v6 */}
        <Route path="/notifications" element={<Notifications />} /> {/* Add route for notifications */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/bell" element={<BellNotification/>} />



      </Routes>
    </Router>
  );
};

export default AppRouter;
