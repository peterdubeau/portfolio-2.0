import React from 'react'
import ScreenFlash from '../ScreenFlash/ScreenFlash'
import './Home.css'

export default function Home() {
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
      <ScreenFlash />
    </div>
  )
}
