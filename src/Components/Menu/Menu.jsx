import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div >
      <p className='intro '>Welcome to my portfolio. I'm a full stack web developer and solutions engineer.</p>
      <div className='nav'>
        <h3>Make your selection</h3>
        <ul>
          <li>Projects</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}
