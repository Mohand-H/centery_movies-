const express = require('express')
const connection = require('./helpers/connect.js')
const addMovies = require('./src/routes/movies')
const showMovies = require('./src/routes/movies')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))



///////////////ROUTING///////////////////////////////
app.use('/movie', addMovies) //Route pour ajouter un filme//
app.use('/movies', showMovies) //Route pour voir tout les filmes//


///////////ROUTES/////////////////////////////////////
app.get('/',(req, res)=>{
    res.send('je suis /ici ')
})

////////////CONNECTION MYSQL////////////////////////////
connection.connect((err) => {
    if (err) {
        console.log(err)
    }else{
        console.log('Database connected')
    }
})

/////////////PORT D'ECOUTE/////////////////////////////////
app.listen(4000, console.log('je suis connecté sur le port 4000 youhouuu'))