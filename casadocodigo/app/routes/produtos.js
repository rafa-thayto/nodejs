module.exports = app => {
    // Criando rotas
    app.get('/produtos', (req, res) => {

        const connection = app.infra.connectionFactory();

        connection.query('select * from produtos', (err, results) => {
            // res.send(results);
            res.render('produtos/lista', {lista: results});
        })

        // Fechando conexão
        connection.end();
    });
}
