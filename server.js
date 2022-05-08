//DEPENDENCIES
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//ROUTES
app.use('/genres', require('./routes/genresRoutes'))
app.use('/login', require('./routes/authRoutes'))

app.get('/', (req, res) => {
    res.send('This is Filmater')
})

app.get('*', (req, res) => {
    res.send('Oops, something went wrong.')
})

app.listen(process.env.PORT, () => {console.log("Listening on PORT:", process.env.PORT)})