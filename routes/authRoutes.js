const auth = require('express').Router()

//INDEX/READ
auth.get('/', (req, res) => {
    res.send('this is retrieving login page')
})


//POST
auth.post('/', (req, res) => {
    res.send('this is submitting login page')
})

//CREATE    
auth.get('/register', (req, res) => {
    res.send('this is retrieving signup page')
})

auth.post('/register', (req, res) => {
    res.send('this is submitting the register form')
})
module.exports = auth