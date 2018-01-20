const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root132',
    database: 'casadocodigo_nodejs'
});

module.exports = () => connection;
