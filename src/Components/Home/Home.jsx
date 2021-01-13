import React, {useState} from 'react'
import ScreenFlash from '../ScreenFlash/ScreenFlash'
import Static from '../Static/Static'
import './Home.css'

export default function Home() {

  const [reset, setReset] = useState(true)
  const [power, setPower] = useState(false)

  const handlePower = () => {
    setReset(true)
    setPower(!power)
  }

  const handleReset = () => {
    
  } 

  return (
    <div className='intro'>
      <h1>Pete Du Beau</h1>
      <p>Welcome to my portfolio. I'm a full stack web developer and solutions engineer.</p>
      <h3>Make your selection</h3>
      <ul>
        <li>Projects</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
      <div className='power-buttons'>
        <button 
          className='reset-button'
          onClick={() => setReset(false)}
        >RESET</button>
        <button
          className='power-button'
          onClick={handlePower}
        >
        POWER
        </button>
        {reset ? <ScreenFlash /> : ''}
        {power ? "" : <Static />}
        <div className="power-light" style={power? {backgroundColor: "red"} : {backgroundColor: "black"} }></div>
      </div>
    </div>
  )
}
