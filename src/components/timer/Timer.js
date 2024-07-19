import React from "react";
import { useState, useEffect} from "react";
import './Timer.css'

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

    return (
      <>
      <span className="texto-timer">FALTAN</span>
      <div className="timer" role="timer">
        <div className="box">
          <p id="day">{days < 10 ? "0" + days : days}</p>
          <span className="text">DÍAS</span>
        </div>
        <div className="box">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
          <span className="text">HRS</span>
        </div>
        <div className="box">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text">MIN</span>
        </div>
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text">SEG</span>
        </div>
      </div>
      </>
    );
  }

export default Timer;
