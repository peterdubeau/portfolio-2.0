import React, { useState } from 'react'
import About from '../About/About'
import './Menu.css'

export default function Menu() {

  const [display, setDisplay] = useState({
    about: false,
    projects: false,
    contact: false
  })

  const handleKeyPress = e => {
    if (e.key === 'Down') {
      
    }
  };

  const handleAbout = () => {
    setDisplay({about:!display.about})
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
            <span>Projects</span>
          </label>
              
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
            <span>Contact</span>
          </label>
      </div>
      {display.about ? <About /> : "" }
      </div>
  )
}
