import React, { useState } from 'react'

import EditProjectForm from './EditProjectForm'

import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const [projectData, setProjectData] = useState({...project})
  const [showEditForm, setShowEditForm] = useState(false)
  const { title, description, urlGitHub, urlProjectLive, screenshot } = projectData

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
            <button className='project-card-edit-button' onClick={() => setShowEditForm(showEditForm => !showEditForm)}>Edit</button>
            {showEditForm && <EditProjectForm data={projectData} functions={{setProjectData, setShowEditForm}} />}
          </div>
          <a target="_blank" rel="noopener noreferrer" href={`${urlGitHub}`}><img id='GitHub-logo' src={`assets/GitHub.png`} alt='logo' /></a>
        </div>
      </article>
    </div>
  )
}

export default ProjectCard

