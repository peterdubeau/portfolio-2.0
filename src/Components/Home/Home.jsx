/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ScreenFlash from '../ScreenFlash/ScreenFlash';
import Static from '../Static/Static';
import './Home.css';

export default function Home() {
  const [reset, setReset] = useState(true);
  const [power, setPower] = useState(false);
  const [startFlash, setStartFlash] = useState({ color: 'white' });
  const history = useHistory();
  const slow = (ms) => {
    const newLocal = new Promise((slowDown) => setInterval(slowDown, ms));
    return newLocal;
  };

  const handlePower = async () => {
    setReset(true);
    await slow(250);
    setPower(!power);
  };

  const handleStart = async () => {
    for (let i = 0; i < 7; i++) {
      setStartFlash({ color: 'black' });
      await slow(100);
      setStartFlash({ color: 'white' });
      await slow(100);
    }
    history.push('/menu');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStart();
    }
  };

  return (
    <div className="intro-container">
      <div className="intro">
        <h1>
          Pete
          <br />
          Du Beau
        </h1>
        <h3>My Portfolio</h3>
        <br />
        <br />
        <p
          onClick={handleStart}
          style={startFlash}
        >
          PRESS START
        </p>
      </div>

      <div className="power-buttons">
        <button
          onKeyPress={handleKeyPress}
          className="reset-button"
          onClick={() => setReset(false)}
        >
          RESET
        </button>
        <button
          className="power-button"
          onClick={handlePower}
        >
          POWER
        </button>
        {reset ? <ScreenFlash slow={slow} /> : ''}
        {power ? '' : <Static />}
        <div className="power-light" style={power ? { backgroundColor: 'red' } : { backgroundColor: 'black' }} />
      </div>
    </div>
  );
}
