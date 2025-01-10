import React, { useState, useEffect } from 'react';


const ProgressBarInReverse = () => {

    const [progressBars, setProgressBars] = useState([]);

    const addProgressBar = () => {
        setProgressBars([...progressBars, { id: Date.now(), progress: 100 }]);
      };

    return (
        <>
            <button onClick={addProgressBar} style={styles.button}>
                Add
            </button>
            {progressBars.map((bar) => (
                <ProgressBar key={bar.id} />
            ))}   
            
        </>
    );
}

const ProgressBar = () => {
    const [progress, setProgress] = useState(100);
  
    // Gradually fill the progress bar
  useEffect(() => {

      // Total duration in milliseconds (2 minutes = 120000 ms)
      const duration = 10000; 
      const interval = 100; // Update interval in milliseconds
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
  
    return (
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
        <span style={styles.label}>{`${Math.round(progress)}%`}</span>
      </div>
    );
  };

  const styles = {
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '20px',
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
      color: '#fff',
    },
  };

    
export default ProgressBarInReverse;