import React, { useState, useEffect, useRef } from 'react';
import "../../App.css";

const CountDownWithInput = () => {
    const inputRef = useRef();

    const [customTime, setCustomTime] = useState(""); // Initialize progress at 0

    const [timeLeft, setTimeLeft] = useState(0); // Timer value
    const [isActive, setIsActive] = useState(false); // To control the timer

    const [progress, setProgress] = useState(100);

    var customTimeInSeconds = customTime * 60;    

    useEffect(() => {
        let timer;
        if(isActive && timeLeft > 0){
            timer = setTimeout(() =>{
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if(timeLeft === 0){
            setIsActive(false); // Stop the timer when it reaches zero
        }

        return () => clearTimeout(timer); // Cleanup the timer

    }, [timeLeft, isActive]);

    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft - minutes * 60;

    if(seconds < 10){
        seconds = "0"+seconds;
    }

    //console.log("Minutes: " + minutes);
    //console.log("Seconds: " + seconds);

    const handleInputChange = (event) => {
        setCustomTime(inputRef.current.value);
        
    }

    const startTimer = () => {
        alert(`Input value: ${customTimeInSeconds}`);
        setTimeLeft(customTimeInSeconds); // Set countdown duration (in seconds)
        setIsActive(true); // Activate the timer
    }
    
    return (
        <>

            <div className="countDown" style={{ textAlign: "center", marginTop: "20px" }}>
                <input type="number" ref={inputRef} onChange={handleInputChange} value={customTime} placeholder="Enter a time in minutes" />
                <button onClick={startTimer}>
                {isActive ? "Counting Down..." : "Start Timer"}
                </button>

                <div style={{ fontSize: "2rem", margin: "20px" }}>
                    <p>Timer: {timeLeft > 0 ? `${minutes}:${seconds}` : "Time's up!"}</p>
                </div>
            </div>
        </>
        
    )
}

export default CountDownWithInput;