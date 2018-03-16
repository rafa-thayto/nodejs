module.exports = app => {
  app.get('/noticia', (req, res) => {

    const connection = app.config.connectionFactory()

    connection.query('select * from noticias where id = 2', (err, result) => {
      res.render('noticias/noticia', {noticia: result})
    })

  })
}