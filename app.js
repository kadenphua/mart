// import express
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var port = 4000

// middleware for all requests

// running express with egs
app.set('view engine', 'ejs')

// set the required routes
var user_routes = require('./routes/users')

var posts = require('./routes/posts')

var mart = require('./routes/mart')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// set the middleware for routes
// automatically link to index.ejs in views folder?
app.get('/', function (req, res, next) {
  res.render('index')
})

app.use('/posts', posts)

app.use('/users', user_routes)

app.use('/mart', mart)

// listening to the opened port
app.listen(port)
console.log('server running at http://localhost:' + port + '/')
