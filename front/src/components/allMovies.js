import React, { Component } from "react"
import axios from "axios"


class AllMovies extends Component {
    state = {
        movies: null
    }

    componentDidMount() {
      
      axios.get(`http://localhost:4000/movies/showMovies/`).then(results => {
        //console.log("RESULT", results.data)
        this.setState({ movie: results.data })
      })
    }
    render() {
      console.log('render', this.state)
       if (this.state.movies === null) {
         return <p> loading... </p>
       
    const tabMovies = this.state.movies.map(value => <div key={value.idmovies}>{value.title}</div>)
    return (
      <div className="app">
        <h2>Liste des Filmes</h2>
      
        {tabMovie}
        </div>

    )
  }
}
}
export default AllMovies