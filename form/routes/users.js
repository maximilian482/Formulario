var conn = require('./../inc/db')
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  conn.query('SELECT * FROM formulario ORDER BY id', (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.send(results)
    }
  })
})

module.exports = router
