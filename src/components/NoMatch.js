import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <>
    <div className='page'>
      <div className='header'>
        <h1 className='header-text'> Page not found </h1>
      </div>
      <p> Oops! We can't seem to find that page. Try returning
      <Link style={{ textDecoration: 'none' }} to='/'> home. </Link>
      </p>
    </div>
  </>
)

export default NoMatch