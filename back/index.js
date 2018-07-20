const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('je suis /ici ')
})
app.listen(4000, console.log('je suis connecté sur le port 4000 youhouuu'))