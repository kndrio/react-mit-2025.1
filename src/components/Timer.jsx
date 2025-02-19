
import React, { useState, useEffect } from 'react';

function Timer({ isRunning }) {
    const [seconds, setSeconds] = useState(0);
   
    useEffect(() => {
      let timer;
      if (isRunning) {
        timer = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
      } else if (!isRunning && seconds !== 0) {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [isRunning, seconds]);
   
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
   
    return (
      <div>
        <h2>Timer: {formatTime(seconds)}</h2>
      </div>
    );
   }
   
   export default Timer;
