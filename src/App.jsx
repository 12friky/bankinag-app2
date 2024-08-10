import React, { useEffect, useState } from 'react';
import AppRouter from './AppRouter'; // Import your AppRouter

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    checkMobileDevice(); // Check on mount
    window.addEventListener('resize', checkMobileDevice); // Check on resize

    return () => {
      window.removeEventListener('resize', checkMobileDevice); // Cleanup
    };
  }, []);

  return (
    <div>
      <AppRouter /> {/* Render the router */}
    </div>
  );
};

export default App;
