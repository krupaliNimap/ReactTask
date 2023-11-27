import React, { useEffect } from "react";
import { useState } from "react";

const Parent15 = () => {
  const currentTime = new Date();
  const [countDown, setCountDown] = useState(0);
  const [stopWatch, setStopWatch] = useState(0);
  let [stopWatchInterval, setStopWatchInterval] = useState();
  const handleCountDown = () => {
    const timer = setInterval(() => {
      setCountDown((prev) => {
        if (prev === 1) clearInterval(timer);
        return prev - 1;
      });
    }, 1000);
  };
  const handleStart = () => {
    setStopWatchInterval(setInterval(() => {
      setStopWatch((prev)=>prev + 1);
    }, 1000))

  };
  const handleStop = () => {
    console.log('stopWatchInterval', stopWatchInterval)
    clearInterval(stopWatchInterval)
  }
  return (
    <>
      countdown clock and stopwatch
      <div>{currentTime.toLocaleString()}</div>
      <>CountDown</>
      <input
        type="number"
        onChange={(e) => setCountDown(e.target.value)}
      ></input>
      <button onClick={handleCountDown}>Start</button>
      <div>{countDown}</div>
      <>Stop watch</>
      <button onClick={handleStart}>Start</button>
      <button onClick={()=>clearInterval(stopWatchInterval)}>Stop</button>
      <button onClick={() => setStopWatch(0)}>Reset</button>
      <div>{stopWatch}</div>
    </>
  );
};

export default Parent15;
