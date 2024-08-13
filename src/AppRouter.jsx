import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Mobile/Login/Login';
import Notifications from './Components/Mobile/ButtonNavigation/Notification/Notifications';
import Dashboard from './Components/Mobile/Dashbord/Dashboard'; // Ensure the spelling is correct

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Use element prop for React Router v6 */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Use element prop for React Router v6 */}
        <Route path="/notifications" element={<Notifications />} /> {/* Add route for notifications */}

      </Routes>
    </Router>
  );
};

export default AppRouter;
