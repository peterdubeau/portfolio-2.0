import React, { useState } from 'react'
import About from '../About/About'
import ProjectIcons from '../ProjectIcons/ProjectIcons'
import Contact from '../Contact/Contact'
import GBControls from '../GBControls/GBControls'
import './Menu.css'

export default function Menu(props) {
  
  const [display, setDisplay] = useState({
    about: false,
    projects: false,
    contact: false,
  })
  const [gbIntro, setGbIntro] = useState(false)
  const [boxSize, setBoxSize] = useState('')

  const slow = (ms) => {
    return new Promise(slowDown => setInterval(slowDown, ms))
  }
  
  const handleAbout = async () => {
    await slow(600)
    setDisplay({...display, about: !display.about })
    growBox(6,10)
  }
  
  const handleContact = async () => {
    await slow(600)
    setDisplay({...display, contact: !display.contact })
    growBox(3,10)
  }

  const handleNext = () => {
    setGbIntro(true)
  }
  const handleProjects = async () => {
    await slow(600)
    setDisplay({...display, projects: !display.projects })
    growBox(3,10)
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
  

  return (<>
    {props.isPageWide ? <>
      <div className='menu-container'>
        <div className='intro'>
          <p className="intro-text" style={gbIntro ? { display: "none" } : {marginTop: '20px'}}>Welcome to my portfolio. I'm a full stack web developer and solutions engineer.
             <br/>
             <br/>
        <label className="next-button">
              <input type="radio" className="nes-radio is-dark" name="answer-dark" />
              <span onClick={handleNext}>Press A</span>
            </label>
          </p>
        </div>
        <div className='nav' style={gbIntro ? {} : { display: "none" }}>
          <h3 className='selection'>Make your selection</h3>
          <label className="project-choices">
            <input type="radio" className="nes-radio is-dark" name="answer-dark" />
            <span onClick={handleAbout}>About Me</span>
          </label>

          <label className="project-choices">
            <input type="radio" className="nes-radio is-dark" name="answer-dark" />
            <span onClick={handleProjects}>Projects</span>
          </label>
              
          <label className="project-choices">
            <input type="radio" className="nes-radio is-dark" name="answer-dark" />
            <span onClick={handleContact}>Contact</span>
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
        {display.contact ? <Contact
          close={setDisplay}
          shrinkBox={shrinkBox}
          boxSize={boxSize}
          growBox={growBox}
          slow={slow}
        /> : ''}
      </div>
      <GBControls />
      </>
      : 
      <div className='menu-container'>
        <div className='intro'>
          <p className="intro-text">Welcome to my portfolio. I'm a full stack web developer and solutions engineer.
          </p>
        </div>
        <div className='nav'>
          <h3 className='selection'>Make your selection</h3>
          <label className="project-choices">
            <input type="radio" className="nes-radio is-dark" name="answer-dark" />
            <span onClick={handleAbout}>About Me</span>
          </label>

          <label className="project-choices">
            <input type="radio" className="nes-radio is-dark" name="answer-dark" />
            <span onClick={handleProjects}>Projects</span>
          </label>
              
          <label className="project-choices">
            <input type="radio" className="nes-radio is-dark" name="answer-dark" />
            <span onClick={handleContact}>Contact</span>
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
        {display.contact ? <Contact
          close={setDisplay}
          shrinkBox={shrinkBox}
          boxSize={boxSize}
          growBox={growBox}
          slow={slow}
        /> : ''}
      </div>
      
      }
  </>)
}
