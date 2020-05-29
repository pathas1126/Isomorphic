import React, { useState, useEffect } from 'react';
import moment from 'moment';

const App = () => {
  const [time, setTime] = useState(null);

  const tick = () => setTime((prevTime) => new Date());

  useEffect(() => {
    tick();
    const interval = setInterval(tick, 200);
    return () => clearInterval(interval);
  }, []);

  const timeString = time && moment(time).format('h:mm:ss a');
  return (
    <div>
      <h1>Sample Application!!!</h1>
      <p>Current time is {timeString}</p>
    </div>
  );
};

export default App;
