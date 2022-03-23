const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'maisColeta',
  password: 'M@ysa100'
})

module.exports = connection
