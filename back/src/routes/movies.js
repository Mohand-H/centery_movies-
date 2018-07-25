const express = require("express")
const Router = express.Router()
const connection = require('../../helpers/connect.js')


//////////////Route pour ajouter un filme//////////////////
Router.post('/addMovies', (req, res) => {
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
        video=?`, [
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
        if (err) {
            return res.send(err)
        } else {
            return res.send({
                data
            })
        }
    })

})

//////////////Route pour voir tout les filmes//////////////
Router.get('/showMovies', (req, res) => {

    const select_query = 'SELECT * FROM movies'
    connection.query(select_query, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send({
                results
            })
            return res.send(results)
        }
    })
})


//////////////Route pour voir (lire) un seul filme//////////////
Router.get('/showMovies/:idmovies', (req, res) => {
    console.log("REQ BODY", req.body)
    console.log("REQ PRAMS", req.params)
    
    const id = [req.params.idmovies]
    const sql = 'SELECT * FROM movies WHERE idmovies = ?'
    connection.query(sql, id, (err, [movie]) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send([movie])
        }

    })
})

//////////////Route pour mettre à jour un filme/////////////////
Router.put('/putMovies/:idmovies', (req, res) => {
    console.log("REQ BODY", req.body)
    console.log("REQ PARAMS:", req.params)

   const id = req.params.idmovies
   const put_sql =` 
   UPDATE movies 
   SET title = ?, 
   release_date = ?, 
   director = ?, 
   with_ = ?, 
   kinds = ?, 
   press_note = ?, 
   spectator_note = ?, 
   description = ?, 
   poster = ?, 
   video = ? 
   WHERE idmovies = ? `
   const values = [
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
        id   
     ]
    connection.query(put_sql, values, (err, data) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send({
                data
            })
        }
    })

})


//////////////Route pour suprimer un filme//////////////////////
Router.delete('/deleteMovies/:idmovies', (req, res) => {
    console.log("REQ PARAMS", req.params)
    const id = req.params.idmovies
    const sql = `DELETE FROM movies WHERE idmovies = ?`
    const values =[id]

    connection.query(sql, values,(err,results)=>{
        if (err){
            res.send(err)
        }else{
            return res.send(results)
        }
    })
 
    
})

module.exports = Router