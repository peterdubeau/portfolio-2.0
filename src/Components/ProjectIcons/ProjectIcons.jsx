import React, {useState} from 'react'
import projectDetails from '../projectDetails.json'
import Projects from '../Projects/Projects'
import './ProjectIcons.css'

export default function ProjectIcons(props) {

  const [selectedProject, setSelectedProject] = useState({
    details: '',
    title: ''
  })

  const findProject = (project) => {
    let selectedProject = projectDetails.filter(function (name) {
      return name.title === project
    });
    setSelectedProject(...selectedProject)
  }
  
  const handleClose = async () => {
    props.shrinkBox()
    await props.slow(500)
    props.close({ about: false })
  }
  
  return (
    <article className="project-container" >
      <div className="nes-container is-dark with-title" style={{
      height: props.boxSize.height,
      width: props.boxSize.width
    }}>
        <p className='title' style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }} >Projects</p>
          <div className="project-list" style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }} >
          {projectDetails.map(project =>
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark"  style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }} />
              <span onClick={() => findProject(project.title)} >{project.title}</span>
          </label>
          )}
          <br/>
          <br/>
        <label>
              <input type="radio" class="nes-radio is-dark" name="answer-dark" />
              <span onClick={handleClose}>Back</span>
            </label>
          </div>
      </div>
      <Projects
        selected={selectedProject}
        close={props.close}
      />
      </article>
  )
}
