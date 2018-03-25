
const db = require('../services/mysql')

// db.categories().all()
// db.categories().save()
// db.categories().update()
// db.categories().delete()

const routes = (server) => {
  server.get('/category', async (req, res, next) => {
    // Using try_catch
    try {
      res.send(await db.categories.all())
      next()
    } catch (error) {
      res.send(error)
      next()
    }
    // Using then and catch
    /* db.categories().all()
      .then(categories => {
        res.send(categories)
        next()
      })
      .catch(error => {
        res.send(error)
        next()
      }) */
  })

  server.post('/category', (req, res, next) => {
    console.log(req)
    const { name } = req.params
    res.send(name)
    next()
  })

  /* server.put('/category', (req, res, next) => {
    res.send()
    next()
  })

  server.delete('/category', (req, res, next) => {
    res.send()
    next()
  }) */
}

module.exports = routes
