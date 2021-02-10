import React from 'react'
import './GBControls.css'

export default function GBControls(props) {
  return (<>
    <div className="logo">Pete's<span className="game-boi">GAME BOI</span></div>
    <div className="controls">
      <div className="d-pad">
        <div class>U</div>
        <div class>L</div>
        <div class>D</div>
        <div class>R</div>
      </div>
      <div className="ss-buttons-container">
        <div className="ss-buttons"><div className="ss-buttons-actual"></div>Select</div>
        <div className="ss-buttons"><div
          className="ss-buttons-actual"
          onClick={props.handleStart}
        ></div>Start</div>
      </div>
      <div className="ab-buttons">
        <div><div>0</div>B</div>
        <div><div>0</div>A</div>
      </div>
      <div className="speakers">
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
      </div>
    </div>
  </>)
}
