import React, { useState, useEffect } from 'react';

const ProgressBarTwo = () => {

    const [progress, setProgress] = useState(0); // Initialize progress at 0

    useEffect(() => {
        // Create a timer to increment the progress
        const timer = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
            clearInterval(timer); // Stop the timer when progress reaches 100%
            return 100;
            }
            return prev + 1; // Increment progress by 1%
        });
        }, 100); // Update every 100ms

        return () => clearInterval(timer); // Cleanup timer when the component unmounts
    }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      <span style={styles.label}>{`${progress}%`}</span>
    </div>
  );
};

const styles = {
  container: {
    width: '50%',
    height: '30px',
    backgroundColor: '#e0e0e0',
    borderRadius: '15px',
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
    transition: 'width 0.1s ease',
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

export default ProgressBarTwo;

