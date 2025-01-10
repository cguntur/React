import React, { useState, useEffect } from 'react';

const SimpleCountdown = ({time}) => {
    const [counter, setCounter] = React.useState(time);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

      return (
        <div className="counter">
          <div>Simple Countdown: {counter}</div>
        </div>
      );
}

export default SimpleCountdown;