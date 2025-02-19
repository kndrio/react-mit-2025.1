import React, { useState } from 'react';
import Timer from './Timer';
const Home = () => {

    const currDate = new Date();
   
    const [isRunning, setIsRunning] = useState(true);
    const toggleTimer = () => {setIsRunning(!isRunning)}

    return (
        <>
        <h1>Home</h1>
        The time now is {currDate.toLocaleTimeString()}
        <Timer isRunning={isRunning} />
        <button onClick={toggleTimer}>{isRunning?'Stop':'Start'}</button>
        </>
    );
}

export default Home;