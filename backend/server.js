const express = require('express')
const cors = require('cors')
const movie = require('./movie')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send ('Hello from backend')
})


app.get('/movies', (req,res) => {
   if(!req.query.movie) {
    return res.send({
        error: 'You must provide a movie name!'
    })
   } else {
    movie(req.query.movie, (error, data) => {
        if(error) {
            return res.send({error})
        }
        res.send(data)
    }) 
   }
})


app.listen(5101, () => {
    console.log('Listening on port 5101');
})