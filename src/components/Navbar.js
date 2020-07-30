import React from 'react'

const Navbar = () => (
  <>
    <nav className='navbar'>
      <div className='navbar-box'>
        <h1 className='nav-header'>
          <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
            Studio Ghibli API
        </a>
        </h1>
        <ul className='nav-nav'>
          <li className='nav-link'>
            <a href='/' className='nav-text'>
              Films
            </a>
          </li>
          <li className='nav-link'>
            <a href='/characters' className='nav-text'>
              Characters
            </a>
          </li>
          <li className='nav-link'>
            <a href='/about' className='nav-text'>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default Navbar