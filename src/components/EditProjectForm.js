import React, { useState } from 'react'
import Axios from 'axios'

import { backURL } from '../config'

import './EditProjectForm.css'

const EditProjectForm = ({ data, setShowEditForm }) => {
  const [projectDetails, setProjectDetails] = useState({ ...data })
  const [editProjectPosted, setEditProjectPosted] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target
    setProjectDetails(prevProjectDetails => ({ ...prevProjectDetails, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Axios.post(`${backURL}/projects`, projectDetails).then(res => {
    //   setEditProjectPosted(editProjectPosted => !editProjectPosted)
    //   setProjectDetails(initialValues)
    // })
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
          <input id='title' name='title' value={projectDetails.title} onChange={handleChange} required />
          <label htmlFor="description">Description:</label>
          <textarea id='description' name='description' value={projectDetails.description} onChange={handleChange} required />
          <label htmlFor="urlGitHub">Projet GitHub (url):</label>
          <input id='urlGitHub' name='urlGitHub' value={projectDetails.urlGitHub} onChange={handleChange} required />
          <label htmlFor="urlProjectLive">Website URL:</label>
          <input id='urlProjectLive' name='urlProjectLive' value={projectDetails.urlProjectLive} onChange={handleChange} required />
          <label htmlFor="screenshot">Image for the project:</label>
          <input id='screenshot' name='screenshot' value={projectDetails.screenshot} onChange={handleChange} required />
          <button className='submit-button'>Send!</button>
        </form>
        {editProjectPosted && <p className='success-message'>New project posted with success!</p>}
      </div>
    </div>
  )
}

export default EditProjectForm