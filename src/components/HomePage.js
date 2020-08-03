import React from 'react'

import ProjectSection from './ProjectSection'

import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <header className='homepage-header'>
        <h1>Sébastien Gruet</h1>
        <p>A little paragraph about me</p>
        <div>
          <a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/sebastien-gruet/`}><img id='HP-LinkedIn-logo' src={`assets/linkedin.png`} alt='logo' /></a>
          <a target="_blank" rel="noopener noreferrer" href={`https://github.com/SebG-prog`}><img id='HP-GitHub-logo' src={`assets/GitHub.png`} alt='logo' /></a>
        </div>
      </header>
      <ProjectSection />
      <footer className='homepage-footer'>
        <div>
          <p>More information...</p>
        </div>
        <div>
          <p>Back to top</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage