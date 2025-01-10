import React, { useState, useEffect, useRef } from 'react';
const ProgressBarTwo = () => {

    const inputRef = useRef();
    
    const [customTime, setCustomTime] = useState(""); // Initialize progress at 0

    const [timeLeft, setTimeLeft] = useState(""); // Timer value
    const [isActive, setIsActive] = useState(false); // To control the timer
    const [progressDone, setProgressDone] = useState(false);
    const [progress, setProgress] = useState(100);

    var customTimeInMilliSeconds = customTime * 60 * 1000;

    var customTimeInSeconds = customTime * 60;

    var seconds = customTimeInSeconds - (customTime * 60);

    
    useEffect(() => {
        let timer;
        
        if(isActive && timeLeft > 0){
            timer = setTimeout(() =>{
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);


        } else if(timeLeft === 0){
            setIsActive(false); // Stop the timer when it reaches zero
            setProgressDone(true);
        }

        return () => clearTimeout(timer); // Cleanup the timer
        

    }, [timeLeft, isActive]);

    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft - minutes * 60;

    if(seconds < 10){
        seconds = "0"+seconds;
    }

    const handleInputChange = (event) => {
        setCustomTime(inputRef.current.value);
    }

    const handleButtonClick = () => {
        setTimeLeft(customTimeInSeconds); // Set countdown duration (in seconds)
        setIsActive(true); // Activate the timer
        //setProgress(100);
        setProgressDone(false);
    }

    // Generate the text color based on progress
    const getColor = (value) => {
        var color = "255";
        if(value < 50){
            color = "0";
        }
        return `rgb(${color}, ${color}, ${color})`;
    };

    console.log("Progress Done 2: " + progressDone);

    return(
        <>
            <div className="countDown" style={{ textAlign: "center", marginTop: "20px" }}>
                <input type="number" ref={inputRef} onChange={handleInputChange} value={customTime} placeholder="Enter a time in minutes" />
                <button onClick={handleButtonClick}>
                {isActive ? "Counting Down..." : "Start Timer"}
                </button>

                
                <div style={{ fontSize: "2rem", margin: "20px" }}>

                    {!isActive && !progressDone && (
                        "Enter Time and Press the start button"
                    )}

                    {isActive && (
                        `${minutes}:${seconds}`
                    )}

                    {!isActive && progressDone && (
                        "Times Up!"
                    )}
                    
                </div>
                {isActive ? 
                    <AddProgressBar duration={customTimeInMilliSeconds} remainingTime={timeLeft} minutes={minutes} seconds={seconds} /> : 
                    ""
                }
            </div>
        </>
    )
}

const AddProgressBar = ({duration, remainingTime, minutes, seconds}) =>{
        const [progress, setProgress] = useState(100);
      
    // Gradually fill the progress bar
    useEffect(() => {

        // Total duration in milliseconds (2 minutes = 120000 ms)
        //const duration = 10000; 
        const interval = 10; // Update interval in milliseconds
        const increment = (100 / duration) * interval;

        const timer = setInterval(() => {
        setProgress((prev) => {
            if (prev <= 0) {
            clearInterval(timer);
            return 0;
            }
            return prev - increment; // Increment progress by 1% every 150ms
        });
        
        }, interval);
    
        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    // Generate the text color based on progress
    const getColor = (value) => {
        var color = "255";
        if(value < 50){
            color = "0";
        }
        return `rgb(${color}, ${color}, ${color})`;
    };

    //console.log("Progress 2: " + progress);
    
    return (
        <>
            <div style={styles.progressBarContainer}>
                <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
                <span style={{...styles.label, color: `${getColor(progress)}`}}>{`${minutes}:${seconds}`}</span>
            </div>
        </>
        
    );
}

const styles = {
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '20px',
      backgroundColor: '#91f2cf',   
    },

    input: {
        padding: '15px',
        fontSize: '14px',
        marginBottom: '15px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      },
      progressBarContainer: {
        width: '50%',
        height: '30px',
        backgroundColor: '#e0e0e0',
        borderRadius: '15px',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '20px',
        margin: '0, auto',
      },
      progressBar: {
        height: '100%',
        backgroundColor: '#4caf50',
        transition: 'width 0.1s linear',
      },
      label: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 'bold',
      },
      labelBack: {

      }
}

export default ProgressBarTwo;
