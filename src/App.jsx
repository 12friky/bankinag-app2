import React, { useEffect, useState } from 'react';
import MobileComponent from './MobileComponent';
import PromptMessage from './PromptMessage';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      const isSmallScreen = window.innerWidth <= 400;
      setIsMobile(isSmallScreen);
    };

    checkMobileDevice(); // Check on mount

    window.addEventListener('resize', checkMobileDevice); // Check on resize

    return () => {
      window.removeEventListener('resize', checkMobileDevice); // Cleanup
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileComponent /> : <PromptMessage />}
    </div>
  );
};

export default App;
