import React from 'react'

const About = () => (
  <>
    <div className='page'>
      <div className='header'>
        <h1 className='header-text'> About </h1>
      </div>
      <p class='paragraph'> Studio Ghibli API is an API practice project made in React.
        Using axios and <a
          style={{ textDecoration: 'none' }}
          href='https://ghibliapi.herokuapp.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          the Studio Ghibli API website
        </a>
        , I requested and posted the data for all of Studio Ghibli's films and characters.
        Enjoy browsing Studio Ghibli's creations!
    </p>
      <p> Favicon by <a
        style={{ textDecoration: 'none' }}
        href='https://www.flaticon.com/authors/freepik'
        target='_blank'
        rel='noopener noreferrer'
      >
        Freepik on Flaticon.
        </a>
      </p>
    </div>
  </>
)

export default About