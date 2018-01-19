module.exports = app => {

    // Criando rotas
    app.get('/produtos', (req, res) => {
        console.log('Listando...')
        // res.json({ produtos: [{}] })
        res.render('produtos/lista')
    })
}
