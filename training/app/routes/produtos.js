module.exports = app => {
    app.get('/produtos', (req, res) => {
        const mysql = require('mysql')
        // Creating a connection in the database
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root132',
            database: 'casadocodigo_nodejs'
        })

        // Pegando dados da tabela
        connection.query('select * from produtos', (err, results) => {
            res.send(results)
        }) 

        // Ending the connection in database
        connection.end()
    })
}
