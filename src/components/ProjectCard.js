import React from 'react'

import './ProjectCard.css'

const ProjectCard = ({ data: { title, description, urlGitHub, urlProjectLive, screenshot } }) => {

  return (
    <div className='project-card-container' >
      <div className="project-image-container">
        <img id='project-image' src={`assets/${screenshot}`} alt='Screenshot of the project' />
      </div>
      <article className="project-card-info">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='project-card-links-container'>
          <div>
            <button className='project-card-view-button'><a target="_blank" rel="noopener noreferrer" href={`${urlProjectLive}`}>View</a></button>
            <button className='project-card-edit-button'><a target="_blank" rel="noopener noreferrer" href={''}>Edit</a></button>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={`${urlGitHub}`}><img id='GitHub-logo' src={`assets/GitHub.png`} alt='logo' /></a>
        </div>
      </article>
    </div>
  )
}

export default ProjectCard

