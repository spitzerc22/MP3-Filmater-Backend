const auth = require('express').Router()
const {submitLogin, submitRegister} = require('../controllers/auth-controller')

//INDEX/READ
auth.get('/', (req, res) => {
    res.send('this is retrieving login page')
})

//POST
auth.post('/', submitLogin)

//CREATE    
auth.get('/new', (req, res) => {
    res.send('this is retrieving signup page')
})

auth.post('/new', submitRegister)

module.exports = auth