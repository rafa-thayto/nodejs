const dbConnection = require('../infra/dbConnection')();
module.exports = app => {
    // Criando rotas
    app.get('/produtos', (req, res) => {

        dbConnection.query('select * from produtos', (err, results) => {
            // res.send(results);
            res.render('produtos/lista', {lista: results});
        })

        // Fechando conexão
        dbConnection.end();
    });
}
