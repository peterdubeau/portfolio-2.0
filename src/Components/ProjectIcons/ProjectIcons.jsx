import React from 'react'
import projectDetails from '../projectDetails.json'
import '../About/About.css'
export default function ProjectIcons(props) {
  return (
      <article className="about-container" >
    <div className="nes-container is-dark with-title">
        {projectDetails.map(project =>
        <label>
          <input type="radio" class="nes-radio is-dark" name="answer-dark"  />
            <span onClick={''}>{project.title}</span>
        </label>
        )}
        <br/>
        <br/>
      <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
            <span onClick={() => props.close({about: false})}>Back</span>
        </label>
    </div>
      </article>
  )
}
