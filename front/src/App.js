import React, { Component } from 'react'

import AllMovies from "./components/allMovies.js"
import AddMovie from "./components/addMovie.js"
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* < AllMovies /> */}
      < AddMovie />
      </div>
    )
  }
}

export default App
