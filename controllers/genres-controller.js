const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Movie.find()
})

module.exports = router