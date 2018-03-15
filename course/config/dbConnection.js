const mysql = require('mysql')

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root132',
    database: 'portal_noticias'
  })
}