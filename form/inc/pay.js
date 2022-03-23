var conn = require('./db')

module.exports = {
  render(req, res, error, success) {
    res.render('pay', {
      body: req.body,
      error,
      success
    })
  },

  getPay() {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM formulario ORDER BY id DESC limit 1`,
        (err, results) => {
          if (err) {
            console.log(err)
          }
          resolve(results)
        }
      )
    })
  },

  save(fields) {
    return new Promise((resolve, reject) => {
      conn.query(
        `
            INSERT INTO pagamentos (formato)
            VALUES(?)
            `,
        [fields.formato],
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
