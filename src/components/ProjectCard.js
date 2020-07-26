import React from 'react'

import './ProjectCard.css'

const ProjectCard = () => {
  return (
    <div className='project-card-container'>
      <p>image</p>
      <p>titre projet</p>
      <p>description</p>
      <div>
        <div>
          <p>{'View & edit'}</p>
        </div>
        <p>github Link</p>
      </div>
    </div>
  )
}

export default ProjectCard