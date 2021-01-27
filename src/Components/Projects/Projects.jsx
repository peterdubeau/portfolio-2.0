
import React from 'react'
import './Projects.css'


export default function Projects(props) {
  
  return (<>
    { props.selected.details === "" ? "" :
      <div className='project-container'>
        <div className ="project-card">
        <div className="nes-container is-dark with-title">
          {props.selected.title}
          {props.selected.description}
            <img src={props.selected.imageURL}
              style={{
              imageRendering: "pixelated",
              height: "100px",
              width: "100px"
              }}
              alt={props.selected.title}
            />
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

