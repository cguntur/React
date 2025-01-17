import React from 'react';
import { useState } from 'react';

const SingleProgressBar = ({ bgcolor, completed }) => {

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

      return (
        <>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </>
      );
}   

const ProgressBar = () => {
    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
    ];

  return (
    <>
        <div className="progress_bar">
            {testData.map( (item, index) => (
                <SingleProgressBar key={index} bgcolor={item.bgcolor} completed={item.completed} />             
            ))}
        </div>
    </>
    
  );
}

export default ProgressBar;