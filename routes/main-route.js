var express = require('express')
var router = express.Router()

// home page route
router.get('/', function (req, res) {
    res.render('./pages/index', { title: 'Starter files', message: 'Message for the home page' })
})

// define the about route
router.get('/about', function (req, res) {
    res.send('About Page')
})

module.exports = router