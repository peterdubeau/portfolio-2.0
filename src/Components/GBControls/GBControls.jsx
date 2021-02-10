import React from 'react'
import './GBControls.css'

export default function GBControls(props) {
  return (<>
    <div className="logo">Pete's<span className="game-boi">GAME BOI</span></div>
    <div className="controls">
      <div className="d-pad">
        <div className='d-pad-vertical'>
          <div className="u-arrow" style={{transform: 'rotate(90deg)'}}>||</div>
          <br/>
          <div className="d-arrow" style={{transform: 'rotate(90deg)'}}>||</div>
        </div>
        <div className='d-pad-horizontal'> 
          <div className="l-arrow">||</div>
          <div className="d-pad-circle"></div>
          <div className="r-arrow">||</div>
        </div>
      </div>
      <div className="ss-buttons-container">
        <div className="ss-buttons"><div className="ss-buttons-actual"></div>Select</div>
        <div className="ss-buttons"><div
          className="ss-buttons-actual"
          onClick={props.handleStart}
        ></div>Start</div>
      </div>
      <div className="ab-buttons">
        <div className="button-actual"></div><div className="button-label">B</div>
        <div className="button-actual"></div><div className="button-label">A</div>
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
