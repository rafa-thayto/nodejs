const mysql = require('mysql');

function createConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root132',
        database: 'casadocodigo_nodejs'
    });
}

// wrapper
module.exports = function() {
    return createConnection;
} 

