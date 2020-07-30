import React from 'react'
import axios from 'axios'

class Film extends React.Component {
  state = { film: {} }

  async componentDidMount() {
    try {
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      const film = response.data
      this.setState({ film: film })
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    const { film } = this.state

    return (
      <>
        <div className='page'>
          <div className='header'>
            <h1 className='header-text'> {film.title} </h1>
          </div>
          <div className='grid'>
            <p > Director: {film.director} </p>
            <p > Producer: {film.producer} </p>
            <p > Release Date: {film.release_date} </p>
            <p> Rating: {film.rt_score}/100 </p>
            <br />
          </div>
          <p class='paragraph'> {film.description} </p>
        </div>
      </>
    )
  }
}

export default Film