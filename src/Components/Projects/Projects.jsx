import React from 'react'

export default function Projects(props) {

  console.log(props.selected)

    return (<>
      {props.selected.title}
      {props.selected.description}
      <img src={props.selected.imageURL} />
      {props.selected.websiteURL}
      {props.selected.githubURL}
    </>)
  }

