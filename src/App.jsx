import { useState } from 'react';
import './App.css';
import '../src/assets/CSS/Accordion.css';
//import styles from '../src/assets/CSS/ProgressBar.module.css';
import ProgressBar from './Components/ProgressBar';
import AddProgressBarOnClick from './Components/ProgressBar/AddProgressBarOnClick';
import ProgressBarWithDuration from './Components/ProgressBar/ProgressBarWtihDuration.jsx';
import SimpleCountdown from './Components/Countdown/SimpleCountdown.jsx';
import CountdownWithInput from './Components/Countdown/CountdownWithInput.jsx';
import ProgressBarInReverse from './Components/ProgressBar/ProgressBarInReverse.jsx';
import ProgressBarColorChange from './Components/ProgressBar/ProgressBarColorChange.jsx';
import ProgressBarTwo from './Components/ProgressBar/ProgressBarTwo.jsx';


function App() {

  return (
    <>
      <div>
        <ProgressBarWithDuration />
      </div>


    </>
  );
}

export default App
