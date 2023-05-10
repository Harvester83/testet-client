import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = () => {
    let hoursInit = 1;
    let minuteInHour = 1;
    let secondsInMinute = 1;

    const [hours, setHours] = useState(hoursInit);
    const [minutes, setMinutes] = useState(minuteInHour);
    const [seconds, setSeconds] = useState(secondsInMinute);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (hours=== 0 && seconds === 0 && minutes === 0) {
                    clearInterval(interval);
                    setIsActive(false);
                }

                if (hours !==0 && seconds === 0 && minutes === 0) {
                    setHours(hours => hours - 1);
                    setMinutes(minuteInHour);
                    setSeconds(secondsInMinute);
                }

                if (minutes !== 0 && seconds === 0) {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(secondsInMinute);
                }

                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                }
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isActive, seconds]);

    return (
        <span>
            {hours}ч {minutes}м {seconds}с
        </span>
    );
};

export default Timer;
