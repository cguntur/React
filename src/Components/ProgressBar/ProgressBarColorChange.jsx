import React, { useState } from "react";

const ProgressBarColorChange = () => {
  const [progress, setProgress] = useState(50);

  // Function to handle progress change
  const handleProgressChange = (e) => {
    const newValue = Math.min(Math.max(e.target.value, 0), 100);
    setProgress(newValue);
  };

  // Generate the text color based on progress
  const getColor = (value) => {
    const red = Math.min(255, Math.floor(255 - (value / 100) * 255));
    const green = Math.min(255, Math.floor((value / 100) * 255));
    return `rgb(${red}, ${green}, 0)`; // Transition from red to green
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <div
        style={{
          width: "100%",
          height: "30px",
          borderRadius: "5px",
          backgroundColor: "#e0e0e0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            transition: "width 0.3s",
          }}
        ></div>
        <span
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            top: "50%",
            transform: "translateY(-50%)",
            fontWeight: "bold",
            color: getColor(progress),
          }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBarColorChange;
