import React from 'react'
import axios from 'axios'

class AddMovie extends React.Component {
    state = {
      title: '',
      release_date: '',
      director: '',
      with_: '',
      kinds: '',
      press_note: '',
      spectator_note: '',
      description: '',
      poster: '',
      video:''
    }
    handleChange = event =>{
      this.setState({ [event.target.name]: event.target.value })
      console.log('this.state.titel',this.state.titel)
    }
    handelSubmit = event => {
      event.preventDefault()
      console.log(this.state)
    }

    render() {
      return (
      <div className='movieForm'>
       <form onSubmit={this.handleSubmit}>
          Titre :
          <input 
          type="text" 
          name="title"
          value={this.state.titel} 
          onChange={this.handleChange} 
          />
          Date de sortie :
          <input 
          type="text" 
          name="release_date"
          value={this.state.release_date} 
          onChange={this.handleChange} 
          />
          Réalisateur :
          <input 
          type="text" 
          name="director"
          value={this.state.director} 
          onChange={this.handleChange} 
          />

          Avec :
          <input 
          type="text" 
          name="title"
          value={this.state.titel} 
          onChange={this.handleChange} 
          />
          Genres :
          <input 
          type="text" 
          name="kinds"
          value={this.state.kinds} 
          onChange={this.handleChange} 
          />
          Presse :
          <input 
          type="text" 
          name="press_note"
          value={this.state.press_note} 
          onChange={this.handleChange} 
          />
          Spectateurs :
          <input 
          type="text" 
          name="spectator_note"
          value={this.state.spectator_note} 
          onChange={this.handleChange} 
          />
          Déscription :
          <input 
          type="text" 
          name="description"
          value={this.state.description} 
          onChange={this.handleChange} 
          />
          Affiche :
          <input 
          type="text" 
          name="poster"
          value={this.state.poster} 
          onChange={this.handleChange} 
          />
          Video :
          <input 
          type="text" 
          name="video"
          value={this.state.video} 
          onChange={this.handleChange} 
          />
          <label>
          <input type='submit'value='Envoyer'/>
          </label>
      </form>
      </div>)

      }
    }

    export default AddMovie