import React, { useState } from 'react'
import About from '../About/About'
import ProjectIcons from '../ProjectIcons/ProjectIcons'
import './Menu.css'

export default function Menu() {
  
  const [display, setDisplay] = useState({
    intro: true,
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
    growBox(6,10)
  }

  const handleProjects = async () => {
    await slow(600)
    setDisplay({ projects: !display.projects })
    growBox(3,10)
  }

  const handleIntro = async () => {
    await slow(200)
    setDisplay({intro: !display.intro})
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
      { display.intro ? 
      <p className='intro' onClick={handleIntro}>Welcome to my portfolio. I'm a full stack web developer and solutions engineer.</p>
        : ""}
      { display.intro ? "" :
        <div className='nav'>
          <h4 className="make-selection">Make your selection</h4>
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
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
          <label onClick={handleIntro}>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
            <span>Back</span>
          </label>
        </div>
      }
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
