
import React, { useEffect } from 'react'
import './Projects.css'


export default function Projects(props) {
  
    // useEffect(() => {
    //   props.growBox(6, 10)
    // },[])
    //Enabling this breaks the page

  const handleClose = async () => {
    props.shrinkBox(6,10)
    await props.slow(400)
    props.setSelected({details: ""})
  }

  return (<>
    { props.selected.details === "" ? "" :
      <div className='project-container' style={{
        height: props.boxSize.height,
        width: props.boxSize.width
      }}>
        <div className ="project-card" style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }}>
          <div className="nes-container is-dark with-title">
            <p className='title' >{props.selected.title}</p>
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
            <span onClick={handleClose}>Back</span>
          </label>
        </div>
        </div>
      </div>
      }
  </>)
  }

