// src/components/UpdateProgressScreen.js

import React, { useState, useEffect } from 'react';
import './Compa.css'; // Import the CSS file


const Compa = () => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 600); // 60 seconds / 100 = 0.6 seconds per increment

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="update-screen">
      <div className="loader"></div>
      <p id="para1">Working on updates {progress}% complete.</p>
      <p id="para2">Don't turn off your PC. This will take a while.</p>
      <p id="para3">Your PC may restart several times</p>
    </div>
  );
};

export default Compa;
