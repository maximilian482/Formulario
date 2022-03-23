var conn = require('./db')

module.exports = {
  render(req, res, error, success) {
    res.render('forms', {
      body: req.body,
      error,
      success
    })
  },

  save(fields) {
    return new Promise((resolve, reject) => {
      conn.query(
        `
            INSERT INTO formulario (qtd_react, qtd_angular, qtd_vue, observacoes)
            VALUES(?,?,?,?)
            `,
        [
          fields.qtd_react,
          fields.qtd_angular,
          fields.qtd_vue,
          fields.observacoes
        ],
        (err, results) => {
          if (err) {
            reject(err)
          } else {
            resolve(results)
          }
        }
      )
    })
  }
}
