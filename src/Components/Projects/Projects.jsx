
import React from 'react'
import './Projects.css'


export default function Projects(props) {


  const handleClose = async () => {
    props.shrinkBox(6,10)
    await props.slow(400)
    props.setSelected({details: ""})
  }

  return (<>
    { props.selected.details === "" ? "" :
        <div className ="project-card" style={props.boxSize.done === true ? {} : { display: 'none' }}>
        <div className='project-container' style={{
          height: props.boxSize.height,
          width: props.boxSize.width
        }}>
          <div className="nes-container is-dark with-title">
            <p className='title' >{props.selected.title}</p>
            <div className="project-details">
            <img src={props.selected.imageURL}
              alt={props.selected.title}
              className="project-image"
            />
            <p className='project-description'>{props.selected.description}</p>
            <div className="project-links">
              <button className="project-link-buttons"><a href={props.selected.websiteURL}>Page</a></button>
              <button className="project-link-buttons"><a href={props.selected.githubURL}>Git Hub</a></button>
            </div>
          <label style={{marginLeft: "-90%"}}>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
                <span onClick={handleClose}>Back</span>
              </label>
            </div>
        </div>
        </div>
      </div>
      }
  </>)
  }

