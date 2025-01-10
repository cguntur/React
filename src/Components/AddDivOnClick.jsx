import React, { useState } from 'react';

const AddDivOnClick = () => {
  const [divs, setDivs] = useState([]); // Array to store the divs

  const addDiv = () => {
    setDivs([...divs, `Div #${divs.length + 1}`]); // Add a new div to the array
  };

  return (
    <div>
      <button onClick={addDiv} style={styles.button}>
        Add Div
      </button>
      <div style={styles.container}>
        {divs.map((content, index) => (
          <div key={index} style={styles.div}>
            {content}
          </div>
        ))}
      </div>
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
    gap: '10px',
  },
  div: {
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: '5px',
    textAlign: 'center',
  },
};

export default AddDivOnClick;
