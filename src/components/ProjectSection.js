import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import ProjectCard from './ProjectCard'

import { backURL } from '../config'

import './ProjectSection.css'

const ProjectSection = () => {
  const [projectData, setProjectData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Axios.get(`${backURL}/project`).then(res => {
      setProjectData(console.log(res.data) || res.data)
      setIsLoaded(isLoaded => !isLoaded)
    })
  }, [])

  return (
    !isLoaded ? <div>Loading...</div> :
    <section className='project-card-section'>
      {projectData.map(project =>
        <ProjectCard key={project.id} data={project}/>
      )}
      </section>
  )
}

export default ProjectSection

