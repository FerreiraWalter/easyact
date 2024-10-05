import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialValue }) => {
  // Add your state and useEffect logic here
  const [seconds, setSeconds] = useState(initialValue)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [])

  return (
    <div>
      {seconds}
    </div>
  );
};

export default CountdownTimer;
