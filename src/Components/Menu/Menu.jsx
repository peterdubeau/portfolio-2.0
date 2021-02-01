import React, { useState } from 'react'
import About from '../About/About'
import ProjectIcons from '../ProjectIcons/ProjectIcons'
import './Menu.css'

export default function Menu() {
  
  const [display, setDisplay] = useState({
    about: false,
    projects: false,
    contact: false
  })
  const [boxSize, setBoxSize] = useState('')

  const slow = (ms) => {
    return new Promise(slowDown => setInterval(slowDown, ms))
  }

  const handleAbout = async () => {
    await slow(600)
    setDisplay({ about: !display.about })
    growBox(9,6)
  }

  const handleProjects = async () => {
    await slow(600)
    setDisplay({ projects: !display.projects })
    growBox(3,5)
  }



  const growBox = async (h,w) => {
    setBoxSize({
      height: `0vh`,
      width: `0vw`,
      done: false
    })
    for (let i = 0; i < 10; i++) {
      await slow(50)
      setBoxSize({
        height: `${i * h}vh`,
        width: `${i * w}vw`,
        done: false
      })
    }
    setBoxSize({
      ...boxSize,
      done: true
    })
  }

  const shrinkBox = async (h,w) => {
    setBoxSize({
      ...boxSize
    })
    for (let i = 10; i > 0; i--) {
      await slow(50)
      setBoxSize({
        height: `${i * h}vh`,
        width: `${i * w}vw`,
        done: false
      })
    }
    setBoxSize({
      ...boxSize,
      done: true
    })
  }
  
  
  return (
    <div >
      <p className='intro '>Welcome to my portfolio. I'm a full stack web developer and solutions engineer.</p>
      <div className='nav'>
        <h3>Make your selection</h3>
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark"  />
            <span onClick={handleAbout}>About Me</span>
          </label>

          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
            <span onClick={handleProjects}>Projects</span>
          </label>
              
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
            <span>Contact</span>
          </label>
      </div>
      {display.about ? <About
        status={display}
        close={setDisplay}
        boxSize={boxSize}
        slow={slow}
        shrinkBox={shrinkBox}
      
      /> : ""}
      {display.projects ? <ProjectIcons
        close={setDisplay}
        shrinkBox={shrinkBox}
        boxSize={boxSize}
        growBox={growBox}
        slow={slow}
      /> : ''}
      </div>
  )
}
