import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Characters extends React.Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get(`https://ghibliapi.herokuapp.com/people`)
      .then(res => {
        this.setState({ characters: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  renderCharacters() {
    return this.state.characters.map(c => (
      <>
        <Link className='link' key={c.id} to={`/characters/${c.id}`}>
          <div className='grid-item'>
            <h1> {c.name} </h1>
          </div>
        </Link>
      </>
    ))
  }

  render() {

    return (
      <>
        <div className='page'>
          <div className='header'>
            <h1 className='header-text'> Characters </h1>
          </div>
          <div className='grid'>
            {this.renderCharacters()}
          </div>
        </div>
      </>
    )
  }
}

export default Characters