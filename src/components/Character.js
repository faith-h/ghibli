import React from 'react'
import axios from 'axios'

class Character extends React.Component {
  state = { character: {}, species: {}, films: [] }

  async componentDidMount() {
    try {
      const response = await axios.get(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      const character = response.data
      this.setState({ character: character })
    } catch (err) {
      console.log(err.response)
    }
    if (this.state.character !== {}) {
      try {
        const response2 = await axios.get(`${this.state.character.species}`)
        const species = response2.data
        this.setState({ species: species })
      } catch (err) {
        console.log(err.response)
      }
      if (this.state.character.films.length > 1) {
        try {
          const response3 = await axios.get(`${this.state.character.films[0]}`)
          const films = response3.data
          this.setState({ films: [...this.state.films, films] })
        } catch (err) {
          console.log(err.response)
        }
        try {
          const response4 = await axios.get(`${this.state.character.films[1]}`)
          const films = response4.data
          this.setState({ films: [...this.state.films, films] })
        } catch (err) {
          console.log(err.response)
        }
      } else {
        try {
          const response5 = await axios.get(`${this.state.character.films}`)
          const films = response5.data
          this.setState({ films: films })
        } catch (err) {
          console.log(err.response)
        }
      }
    }
  }

  getFilms() {
    return this.state.films.map(f => (
      <span key={f.id}> {f.title} </span>
    ))
  }

  render() {
    const { character, species, films } = this.state

    return (
      <>
        <div className='page'>
          <div className='header'>
            <h1 className='header-text'> {character.name} </h1>
          </div>
          <div className='grid'>
            <p> Species: {species.name} </p>
            <p> Age: {character.age} </p>
            <p> Gender: {character.gender} </p>
            <p> Eye color: {character.eye_color} </p>
            <p> Hair color: {character.hair_color} </p>
            {this.state.films.length > 1 ?
              <p> Appears in: {this.getFilms()} </p>
              :
              <p> Appears in: {films.title} </p>
            }
          </div>
        </div>
      </>
    )
  }
}

export default Character