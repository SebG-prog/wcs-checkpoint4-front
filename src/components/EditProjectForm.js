import React, { useState } from 'react'
import Axios from 'axios'

import { backURL } from '../config'

import './EditProjectForm.css'

const EditProjectForm = ({ data, functions : {setProjectData, setShowEditForm} }) => {
  const [newProjectDetails, setNewProjectDetails] = useState({ ...data })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProjectDetails(prevNewProjectDetails => ({ ...prevNewProjectDetails, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await Axios.put(`${backURL}/projects`, newProjectDetails)
    setProjectData(result.data)
    setShowEditForm(showEditForm => !showEditForm)
  }

  return (
    <div className='edit-project-modal'>
      <div className='edit-project-container'>
        <div className='edit-head-modal'>
          <h1>Edit project</h1>
          <button className='close-button' onClick={() => setShowEditForm(showEditForm => !showEditForm)}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input id='title' name='title' value={newProjectDetails.title} onChange={handleChange} required />
          <label htmlFor="description">Description:</label>
          <textarea id='description' name='description' value={newProjectDetails.description} onChange={handleChange} required />
          <label htmlFor="urlGitHub">Projet GitHub (url):</label>
          <input id='urlGitHub' name='urlGitHub' value={newProjectDetails.urlGitHub} onChange={handleChange} required />
          <label htmlFor="urlProjectLive">Website URL:</label>
          <input id='urlProjectLive' name='urlProjectLive' value={newProjectDetails.urlProjectLive} onChange={handleChange} required />
          <label htmlFor="screenshot">Image for the project:</label>
          <input id='screenshot' name='screenshot' value={newProjectDetails.screenshot} onChange={handleChange} required />
          <button className='submit-button'>Send!</button>
        </form>
      </div>
    </div>
  )
}

export default EditProjectForm