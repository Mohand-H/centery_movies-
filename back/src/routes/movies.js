const express = require("express")
const Router = express.Router()
const connection = require('../../helpers/connect.js')


//////////////Route pour ajouter un filme//////////////////
Router.post('/addMovies',(req, res)=>{
    connection.query(`
    INSERT INTO movies
    SET title=?, 
        release_date=?, 
        director=?, 
        with_=?, 
        kinds=?, 
        press_note=?, 
        spectator_note=?, 
        description=?, 
        poster=?, 
        video=?`,[
        req.body.title,
        req.body.release_date,
        req.body.director,
        req.body.with_,
        req.body.kinds,
        req.body.press_note,
        req.body.spectator_note,
        req.body.description,
        req.body.poster,
        req.body.video,
        ], (err, data) => {
        if (err){
            return res.send(err)
        }else{
            return res.send({
                data
            })
        }
    })

})

//////////////Route pour voir tout les filmes//////////////
Router.get('/showMovies', (req, res) => {
    const select_query='SELECT * FROM movies'
    connection.query(select_query, (err, results) =>{
        if (err){
            return res.send(err)
        }else{
            return res.send({results})
        }
    })
})


//////////////Route pour voir (lire) un seul filme//////////////
Router.get('/showOne', (req, res) => {
    res.send('Show one')
})


//////////////Route pour mettre à jour un filme/////////////////
Router.put('/updetMovie', (req, res) => {
    res.send('updet')
})


//////////////Route pour suprimer un filme//////////////////////
Router.put('/DeletMovie', (req, res) => {
    res.send('delet')
})

module.exports = Router