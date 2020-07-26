import React from 'react'

import './ProjectCard.css'

const ProjectCard = ({ data: { title, description, urlGitHub, urlProjectLive, screenshot } }) => {

  return (
    <div className='project-card-container' >
      <p>{screenshot}</p>
      <p>{title}</p>
      <p>{description}</p>
      <div>
        <div>
          <p>{urlProjectLive} + Edit</p>
        </div>
        <p>{urlGitHub}</p>
      </div>
    </div>
  )
}

export default ProjectCard

