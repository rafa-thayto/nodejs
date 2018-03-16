const mysql = require('mysql')
// Nesse caso foi utilizado function para que o createConnection 
// pegue o escopo de onde foi chamado
const createConnection = function () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root132',
    database: 'portal_noticias'
  })
}

module.exports = () => {
  return createConnection
}