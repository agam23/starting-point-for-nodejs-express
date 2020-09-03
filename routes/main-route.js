var express = require('express')
var router = express.Router()

// home page route
router.get('/', function (req, res) {
    res.render('./pages/index', { title: 'Starter files', message: 'Message for the home page' })
})

// define the about route
router.get('/about', function (req, res) {
    //if you dont want templating
    res.send('<h1>About Page</h1>')
})

module.exports = router