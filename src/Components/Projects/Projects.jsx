/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './Projects.css'


export default function Projects(props) {
  
  const [selected, setSelected] = useState(props.selected)
  console.log(props.selected)
  
  return (<>
    { props.selected.details === "" ? "" :
      <div className='project-container'>
        <div className ="project-card">
        <div className="nes-container is-dark with-title">
          {props.selected.title}
          {props.selected.description}
          <img src={props.selected.imageURL} style={{
            imageRendering: "pixelated",
            height: "100px",
            width: "100px"
          }} />
          <button ><a href={props.selected.websiteURL}>Page</a></button>
          <button ><a href={props.selected.githubURL}>Git Hub</a></button>
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
            <span onClick={() => props.close({ about: false })}>Back</span>
          </label>
        </div>
        </div>
      </div>
      }
  </>)
  }

