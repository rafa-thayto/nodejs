
// This receive dependencies
const categories = deps => {
  return {
    all () {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps

        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as categorias', reject)
            return
          }
          // Pagination é uma forma de ajudar o cara do front-end
          resolve({ pagination: { page: 1, results: results.length }, categories: results })
        })
      })
    },
    save (name) {

    },
    update (id, name) {

    },
    delete (id) {

    }
  }
}

module.exports = categories
