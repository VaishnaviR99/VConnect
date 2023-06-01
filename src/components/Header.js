import React from 'react'
import "../styles/Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div>
        <h1>V</h1>
        <h1>Connect</h1>
      </div>

      <main>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/details'}>ShareYourDetails</Link>
        <Link to={'/contact'}>Contact</Link>
        
        


      </main>
    </nav>
  )
}

export default Header