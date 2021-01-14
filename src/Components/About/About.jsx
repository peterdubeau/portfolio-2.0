/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './About.css';

export default function About(props) {
  return (
    <div className="about-container">
      <div className="nes-container is-dark with-title">
        <p className="title">About Me</p>
        I am a software engineer who leverages 8 years of sales and account management
        experience to build and implement consumer driven products.
        Whether it be navigating B2B sales issues or developing websites,
        I am an expert at diagnosing the core problems to technical issues and
        developing customized solutions that speak to the heart of customers needs.
        I seek the opportunity to join a forward-thinking technology team that places
        consumer experience at the center of what they do.
        <br />
        <br />
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" />
          <span onClick={() => props.close({ about: false })}>Back</span>
        </label>
      </div>
    </div>
  );
}
