import React, { useState, useEffect } from "react";

let startDate = new Date(Date.now());
// Christmas:
let endDate = new Date(startDate.getFullYear(), 11, 24, 0, 0, 0);
//seconds until Christmas using current time
let seconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000);

// Takes seconds input and converts it to days, hours, minutes and seconds, then returns the data as an object
function secondsToTime(seconds) {
  let days = Math.floor(seconds / (60 * 60 * 24));

  let divisorForHours = seconds % (60 * 60 * 24);
  let hours = Math.floor(divisorForHours / (60 * 60));

  let divisorForMinutes = divisorForHours % (60 * 60);
  let minutes = Math.floor(divisorForMinutes / 60);

  let divisorForSeconds = divisorForMinutes % 60;
  let secs = Math.ceil(divisorForSeconds);

  let time = {
    d: days,
    h: hours,
    m: minutes,
    s: secs,
  };
  return time;
}

// Returns a component counting down to Christmas
function Countdown() {
  const [timer, timerUpdate] = useState("");
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    let totalTime = secondsToTime(timeLeft);

    timerUpdate(
      `${totalTime.d} dager, ${totalTime.h} timer, ${totalTime.m} minutter, ${totalTime.s} sekunder`
    );

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);

    // add timeLeft as a dependency to re-rerun the effect when we update it
  }, [timeLeft]);
  // the useEffect block runs each time one of the variables in the dependency array changes (each
  // variable does not need to change at the same time).
  // Here we have only one variable (timeLeft, which is a number counting down seconds to Christmas,
  // and thus decrements once every second / 1000ms))

  // If the month is December and the date is between December 24th and December 31st, display a
  // message saying it is Christmas.
  if (startDate.getMonth() === 11 && startDate.getDate() > 23) {
    return (
      <>
        <p className="countdown countdown-text">Tid til jul:</p>
        <p className="countdown countdown-time">Det er jul!</p>
      </>
    );
  }

  return (
    <>
      <p className="countdown countdown-text">Tid til jul:</p>
      <p className="countdown countdown-time">{timer}</p>
    </>
  );
}

export default Countdown;
