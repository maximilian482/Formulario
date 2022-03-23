var conn = require('./../inc/db')
var express = require('express')
var router = express.Router()
var forms = require('./../inc/forms')
var pay = require('./../inc/pay')
var end = require('./../inc/end')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Formulário' })

  forms.render(req, res)
})

router.get('/forms', function (req, res, next) {
  forms.render(req, res)
})

router.post('/forms', function (req, res, next) {
  if (!req.body.qtd_react >= 1) {
    forms.render(req, res, 'err')
  } else {
    forms
      .save(req.body)
      .then(results => {
        req.body = {}
        forms.render(req, res, null, res.redirect('pay'))
      })
      .catch(err => {
        forms.render(req, res, err)
      })
  }
})

router.get('/pay', function (req, res, next) {
  pay.getPay().then(results => {
    res.render('pay', {
      pay: results
    })
  })
})

router.post('/pay', function (req, res, next) {
  pay
    .save(req.body)
    .then(results => {
      req.body = {}
      pay.render(req, res, null, res.redirect('end'))
    })
    .catch(err => {
      pay.render(req, res, err)
    })
})

router.get('/end', function (req, res, next) {
  end.render(req, res)
})

module.exports = router
