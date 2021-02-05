import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ScreenFlash from '../ScreenFlash/ScreenFlash'
import Static from '../Static/Static'
import './Home.css'

export default function Home() {

  const [reset, setReset] = useState(true)
  const [power, setPower] = useState(false)
  const [startFlash, setStartFlash] = useState({})
  const [home, setHome] = useState({
    name: true,
    start: true
  })
  
  const history = useHistory()
  const slow = (ms) => {
    return new Promise(slowDown => setInterval(slowDown, ms))
  }

  
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
    
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);
    
    return matches;
  }
  
  let isPageWide = useMediaQuery('(max-width: 720px)')

  const handlePower = async () => {
    setReset(true)
    await slow(250)
    setPower(!power)
  }

  const handleStart = async () => {
    for (let i = 0; i < 7; i++) {
      if (isPageWide) {
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
    if (isPageWide) {
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
  }, [isPageWide])
  
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
          onClick={() => setReset(false)}
        >RESET</button>
        <button
          className='power-button'
          onClick={handlePower}
        >
        POWER
        </button>
        {reset ? <ScreenFlash slow={slow}/> : ''}
        {power ? "" : <Static />}
        <div className="power-light" style={power? {backgroundColor: "red"} : {backgroundColor: "black"} }></div>
      </div>
    </div>
  </>)
}
