import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="text-2xl font-medium z-20 relative">
      <ul className="flex gap-12">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
