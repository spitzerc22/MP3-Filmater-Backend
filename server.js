const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
    res.send('This is filmater')
})

app.get('*', (req, res) => {
    res.send('Oops, something went wrong.')
})

app.listen(process.env.PORT, () => {console.log("Listening on PORT:", process.env.PORT)})