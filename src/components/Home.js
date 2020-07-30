import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = { films: [] }

  componentDidMount() {
    axios.get(`https://ghibliapi.herokuapp.com/films`)
      .then(res => {
        this.setState({ films: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  renderFilms() {
    return this.state.films.map(f => (
      <>
        <Link className='link' key={f.id} to={`/film/${f.id}`}>
          <div className='grid-item'>
            <h1> {f.title} </h1>
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
            <h1 className='header-text'> Films </h1>
          </div>
          <div className='grid'>
            {this.renderFilms()}
          </div>
        </div>
      </>
    )
  }
}

export default Home