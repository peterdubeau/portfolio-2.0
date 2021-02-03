import React, {useState} from 'react'
import projectDetails from '../projectDetails.json'
import Projects from '../Projects/Projects'
import './ProjectIcons.css'

export default function ProjectIcons(props) {

  const [selectedProject, setSelectedProject] = useState({
    details: '',
    title: ''
  })

  const findProject = async (project) => {
    let selectedProject = projectDetails.filter(function (name) {
      return name.title === project
    });
    await props.slow(600)
    setSelectedProject(...selectedProject)
    props.growBox(6,9)
  }
  
  const handleClose = async () => {
    await props.slow(600)
    await props.shrinkBox(3, 10)
    props.close({ about: false })
  }
  console.log(selectedProject.title)
  return (
    <article className="project-icon-container" >
      <div className="nes-container is-dark with-title" style={{
      height: props.boxSize.height,
      width: props.boxSize.width
    }}> 
    {/* selectedProject.title === undefined &&  */}
        <p className='title' style={props.boxSize.done === true  ? { display: "inherit" } : { display: 'none' }} >Projects</p>
          <div className="project-list" style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }} >
          {projectDetails.map(project =>
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark"  style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }} />
              <span onClick={() => findProject(project.title)} className='project-title'>{project.title}</span>
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
        setSelected={setSelectedProject}
        close={props.close}
        shrinkBox={props.shrinkBox}
        growBox={props.growBox}
        slow={props.slow}
        boxSize={props.boxSize}
      />
      </article>
  )
}
