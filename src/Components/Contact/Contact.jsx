import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact(props) {

const details = [
  // {
  //   "title": "twitter",
  //   "url": "http://www..com"
  // },
  {
    "title": "GitHub",
    "url": "https://github.com/peterdubeau"
  },{
    "title": "Portfolio",
    "url": "http://petedubeau.surge.sh"
  }, {
    "title": "Email",
    "url": "mailto:spaceboatproduction@gmail.com"
  }, {
    "title": "LinkedIn",
    "url": "https://linkedin.com/in/peterdubeau/"
  }
]
  
const handleClose = async () => {
  props.shrinkBox(3,5)
  await props.slow(500)
  props.close({ contact: false })
}


return (
  <div className='contact-container'>
          <div className="nes-container is-dark with-title" style={{height: props.boxSize.height, width: (props.boxSize.width)}}>
        <p className='title' style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }} >Contact</p>  
    {details.map(page =>         
      <p className='pages'>
        <Link
          style={props.boxSize.done === true ? { display: "inherit" } : { display: 'none' }} 
          className='page-links'
          to={{ pathname: `${page.url}` }}
          target="_blank"
        >
          {page.title}
        </Link>
      </p>
    )
      }
       <input type="radio" class="nes-radio is-dark" name="answer-dark" 
            style={props.boxSize.done === true  ? {}: { display: 'none' } }
          checked />
          <span
            onClick={handleClose}
            style={props.boxSize.done === true ? {}: { display: 'none' }}
          >Back</span>
    </div>
    </div>
)
}