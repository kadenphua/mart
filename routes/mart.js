var express = require('express')
var router = express.Router()

// All the GET request
router.get('/', function (req, res) {
  res.render('mart/index')
}).get('/customer', function (req, res) {
  res.render('mart/customer')
}).get('/inventory', function (req, res) {
  res.render('mart/inventory')
}).get('/purchase', function (req, res) {
  res.render('mart/purchase')
}).get('/shipment', function (req, res) {
  res.render('mart/shipment')
}).get('/supplier', function (req, res) {
  res.render('mart/supplier')
})

// the only POST request
router.post('/', function (req, res) {
  res.send(req.body)
})

// only PUT request
router.put('/:id', function (req, res) {
  res.send('edit movie' + req.params.id)
})

// DELETE ROUTES
router.delete('/:id', function (req, res) {
  res.send('delete movie' + req.params.id)
})

module.exports = router
