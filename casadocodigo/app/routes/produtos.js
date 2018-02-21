module.exports = app => {
    // Criando rotas
    app.get('/produtos', (req, res) => {

        const connection = app.infra.connectionFactory()
        const produtosDAO = new app.infra.ProdutosDAO(connection)

        produtosDAO.lista((err, results) => {
            // res.send(results);
            res.render('produtos/lista', {lista: results})
        })

        // Fechando conexão
        connection.end();
    })

    app.get('/produtos/remove', () => {

        const connection = app.infra.connectionFactory()
        const produtosDAO = new app.infra.ProdutosDAO(connection)
        const produto = produtosDAO.carrega(id, callback)

        if(produto) {
            produtosDAO.remove(produto, callback)
        }        

    })
}
