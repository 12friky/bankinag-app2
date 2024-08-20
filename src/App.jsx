import React, { useEffect, useState } from 'react';
import AppRouter from './AppRouter'; 

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      setIsMobile(window.innerWidth <= 400);
    };

    checkMobileDevice(); 
    window.addEventListener('resize', checkMobileDevice); // Check on resize

    return () => {
      window.removeEventListener('resize', checkMobileDevice); // Cleanup
    };
  }, []);

  if (!isMobile) {
    return (
      <div>
        <h1>This app is only available on mobile devices.</h1>
        <p>Please visit this site on a mobile device to continue.</p>
      </div>
    );
  }

  return (
    <div>
      <AppRouter /> {/* Render the router */}
    </div>
  );
};

export default App;
