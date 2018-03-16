// const dbConnection = require('../../config/dbConnection')

module.exports = app => {

  app.get('/noticias', (req, res) => {
    
    const connection = app.config.connectionFactory()

    connection.query('select * from noticias', (err, result) => {
      res.render('noticias/noticias', {noticias: result})
      // res.send(result)
    })

  })
}