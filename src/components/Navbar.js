import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='homepage-navbar'>
      <Link id='homepage-link' to='/' >Portfolio</Link>
    </nav>
  )
}

export default Navbar