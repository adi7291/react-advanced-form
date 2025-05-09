import { useState, useRef } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    console.log("timer started");
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    console.log("pause timer");
    if (timerRef.current || timerRef.current == null) {
      clearInterval(timerRef.current);

      timerRef.current = null;
    }
    setCount(count);
  };
  const resetTimer = () => {
    if (timerRef.current || timerRef.current == null) {
      clearInterval(timerRef.current);

      timerRef.current = null;
    }
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};
export default Timer;
