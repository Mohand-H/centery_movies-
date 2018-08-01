import React, { Component } from "react"
import axios from "axios"

class AllMovies extends Component {
  state = {
    movies: null
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/movies/showMovies/`).then(result => {
      console.log("RESULT", result.data)
      this.setState({ movies: result.data.results })
    })
  }
  render() {
    console.log("state movies", this.state.movies)
    if (this.state.movies === null) {
      return <p> loading... </p>
    }
    const tabMovies = this.state.movies.map((value, key) => {
      return (
        <div className ="movieContainer" key={key}>
          <div className = "movieValues"> {value.idmovies} </div>
          <div className = "movieValues"> {value.title} </div>
          <div className = "movieValues"> {value.release_date} </div>
          <div className = "movieValues"> {value.director} </div>
          <div className = "movieValues"> {value.with_} </div>   
          <div className = "movieValues"> {value.kinds} </div>
          <div className = "movieValues"> {value.press_note} </div>
          <div className = "movieValues"> {value.spectator_note} </div>
          <div className = "movieValues"> {value.description} </div>
          <div className = "movieValues"> {value.poster} </div>
          <div className = "movieValues"> {value.video} </div>
        </div>
      )
    })
    return (
      <div className = "globalForm"> {tabMovies} </div>
    )
  }
}
export default AllMovies
