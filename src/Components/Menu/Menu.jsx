/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import About from '../About/About';
import ProjectIcons from '../ProjectIcons/ProjectIcons';
import './Menu.css';

export default function Menu() {
  const [display, setDisplay] = useState({
    about: false,
    projects: false,
    contact: false,
  });

  const slow = (ms) => new Promise((slowDown) => setInterval(slowDown, ms));

  const handleAbout = async () => {
    await slow(600);
    setDisplay({ about: !display.about });
  };

  const handleProjects = async () => {
    await slow(600);
    setDisplay({ projects: !display.projects });
  };

  return (
    <div>
      <p className="intro ">Welcome to my portfolio. I'm a full stack web developer and solutions engineer.</p>
      <div className="nav">
        <h3>Make your selection</h3>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" />
          <span onClick={handleAbout}>About Me</span>
        </label>

        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" />
          <span onClick={handleProjects}>Projects</span>
        </label>

        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" />
          <span>Contact</span>
        </label>
      </div>
      {display.about ? <About close={setDisplay} /> : ''}
      {display.projects ? <ProjectIcons close={setDisplay} /> : ''}
    </div>
  );
}
