import React from 'react'
import './About.css'
export default function About(props) {


  return (
    <div className="about-container">
      <div className="nes-container is-dark with-title" style={{height: props.boxSize.height, width: (props.boxSize.width)}}>
        <p className='title'>About Me</p>  
        <p className='about-me-text' style={props.boxSize.done === true ? { display: "inherit"} : { display: 'none' } }>
          I am a software engineer who leverages 8 years of sales and account management 
          experience to build and implement consumer driven products.
          Whether it be navigating B2B sales issues or developing websites,
          I am an expert at diagnosing the core problems to technical issues and
          developing customized solutions that speak to the heart of customers needs.
          I seek the opportunity to join a forward-thinking technology team that places
          consumer experience at the center of what they do.
        </p>
        <br />
        <br/>
        <label>
          <input type="radio" class="nes-radio is-dark" name="answer-dark" 
            style={props.boxSize.done === true  ? { height: '300px'} : { display: 'none' } }
          checked />
          <span
            onClick={() => props.close({ about: false })}
            style={props.boxSize.done === true ? { height: '300px' } : { display: 'none' }}
          >Back</span>
        </label>
      </div>
    </div>
  )
}
