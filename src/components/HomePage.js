import React from 'react'

import './HomePage.css'
import ProjectSection from './ProjectSection'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <nav>Portfolio</nav>
      <header className='homepage-header'>
        <h1>John Doe</h1>
        <p>A little paragraph about me</p>
        <div>Logo github & linkedIn</div>
      </header>
      <ProjectSection />
      <footer className='homepage-footer'>
        <div>
          <p>Album example customized blabla</p>
          <p>More information blabla</p>
        </div>
        <div>
          <p>Back to top</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage