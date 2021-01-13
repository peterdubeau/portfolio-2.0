import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div >
      <p className='intro '>Welcome to my portfolio. I'm a full stack web developer and solutions engineer.</p>
      <div className='nav'>
        <h3>Make your selection</h3>
        <ul className='options-container'>
          <li className='options'>Projects</li>
          <li className='options'>About Me</li>
          <li className='options'>Contact</li>
        </ul>
      </div>
    </div>
  )
}
