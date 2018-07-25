const express = require('express')
const morgan = require('morgan')
const cors = require ('cors') 
const bodyParser = require('body-parser')

const connection = require('./helpers/connect.js')
//const addMovies = require('./src/routes/movies')
const allMovies = require('./src/routes/movies')

const app = express()

///////////////MIDDLEWARE///////////////////////////////
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




///////////////ROUTING///////////////////////////////
//app.use('/movies', addMovies) //Route pour ajouter un filme//
app.use('/movies', allMovies) //Route pour voir tout les filmes//


///////////ROUTES/////////////////////////////////////
app.get('/', (req, res) => {
    res.send('je suis /ici ')
})

////////////CONNECTION MYSQL////////////////////////////
connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Database connected')
    }
})

/////////////PORT D'ECOUTE/////////////////////////////////
app.listen(4000, console.log('je suis connecté sur le port 4000 youhouuu'))