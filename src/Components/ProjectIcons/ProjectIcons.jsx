/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import projectDetails from '../projectDetails.json';
import '../About/About.css';

export default function ProjectIcons(props) {
  return (
    <article className="about-container">
      <div className="nes-container is-dark with-title">
        {projectDetails.map((project) => (
          <label>
            <input type="radio" className="nes-radio is-dark" name="answer-dark" />
            <span onClick="">{project.title}</span>
          </label>
        ))}
        <br />
        <br />
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" />
          <span onClick={() => props.close({ about: false })}>Back</span>
        </label>
      </div>
    </article>
  );
}
