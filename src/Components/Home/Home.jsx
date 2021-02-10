import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ScreenFlash from '../ScreenFlash/ScreenFlash'
import Static from '../Static/Static'
import GBControls from '../GBControls/GBControls'
import './Home.css'

export default function Home(props) {

  // const [reset, setReset] = useState(false)
  const [power, setPower] = useState(false)
  const [startFlash, setStartFlash] = useState({})
  const [doesFlash, setDoesFlash] = useState(false)
  const [home, setHome] = useState({
    name: true,
    start: true
  })
  
  const history = useHistory()
  const slow = (ms) => {
    return new Promise(slowDown => setInterval(slowDown, ms))
  }

  const handleFlash = () => {
    let flash = Math.floor(Math.random() * 4)
    if (flash === 1) {
      setDoesFlash(true)
    } 
  }
  
  const handlePower = async () => {
    handleFlash()
    await slow(250)
    setPower(!power)
  }

  const handleStart = async () => {
    for (let i = 0; i < 7; i++) {
      if (props.isPageWide) {
        setStartFlash({ color: "rgb(48, 98, 48)" })
        await slow(100)
        setStartFlash({ color: "rgb(139 172 15)" })
        await slow(100)
      } else {
        setStartFlash({ color: "black" })
        await slow(100)
        setStartFlash({ color: "white" })
        await slow(100)
      }
    }
    history.push('/menu')
  }


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStart()
    }
  };

  const gameBoyStart = async () => {
    if (props.isPageWide) {
      setHome({
        name: true,
        start: false
      })
      await slow(4000)
      setHome({
        name: false,
        start: true
      })
    } 
  }
    
  useEffect((isPageWide) => {
      gameBoyStart()
  }, [props.isPageWide])

  
  return (<>
    <div className='intro-container'>
    <div className="gray-bar"></div>
      <div className='intro'>
        {home?.name ? <h1 className="pete-dubeau">Pete Du Beau</h1> : ""}
        {home?.start ? <>
        <h3 className="my-portfolio">Portfolio Redux</h3>
        <br/><br/>
        <p
          className="start"
          onClick={handleStart}
          style={startFlash}
        >PRESS START</p></>
       : "" }
      </div>
      <div className='power-buttons'>
        <button 
          onKeyPress={handleKeyPress}
          className='reset-button'
          onClick={() => setDoesFlash(false)}
        >RESET</button>
        <button
          className='power-button'
          onClick={handlePower}
        >
        POWER
        </button>
        {doesFlash ? <ScreenFlash
          slow={slow}
          flash={handleFlash}/> : ''}
        {power ? "" : <Static />}
        <div className="power-light" style={power? {backgroundColor: "red"} : {backgroundColor: "black"} }></div>
      </div>
    </div>
    {props.isPageWide ? <GBControls handleStart={handleStart}/> : ""}
  </>)
}
