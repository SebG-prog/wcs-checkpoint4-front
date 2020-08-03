import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import ProjectCard from './ProjectCard'

import { backURL } from '../config'

import './ProjectSection.css'

const ProjectSection = () => {
  const [projectList, setProjectList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Axios.get(`${backURL}/projects`).then(res => {
      setProjectList(res.data)
      setIsLoaded(isLoaded => !isLoaded)
    })
  }, [])

  return (
    !isLoaded ? <div>Loading...</div> :
      <section className='project-card-section'>
        {projectList.map(project =>
          <ProjectCard key={project.id} project={project} />
        )}
        <Link id='addProject' to='/addProject' >Add a Project (+)</Link>
      </section>
  )
}

export default ProjectSection

