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
  
  

  return (
      <article className="project-container" >
        <div className="nes-container is-dark with-title">
          <div className="project-list">
          {projectDetails.map(project =>
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark"  />
              <span onClick={() => findProject(project.title)}>{project.title}</span>
          </label>
          )}
          <br/>
          <br/>
        <label>
              <input type="radio" class="nes-radio is-dark" name="answer-dark" />
              <span onClick={() => props.close({about: false})}>Back</span>
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
