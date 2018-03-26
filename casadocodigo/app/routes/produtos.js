module.exports = app => {
    const listaProdutos = (req, res) => {
        const connection = app.infra.connectionFactory()
        const produtosDAO = new app.infra.ProdutosDAO(connection)

        produtosDAO.lista((err, results) => {
            // res.send(results);
            res.render('produtos/lista', {lista: results})
        })
        connection.end();
    }
    
    // Criando rotas
    app.get('/produtos', listaProdutos)

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form')
    })

    app.post('/produtos', (req, res) => {
        const produto = req.body
        console.log(produto)

        const connection = app.infra.connectionFactory()
        const produtosDAO = new app.infra.ProdutosDAO(connection)

        produtosDAO.salva(produto, (err, results) => {
                res.redirect('/produtos')
        })
    })
}
