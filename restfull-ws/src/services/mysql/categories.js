
// This receive dependencies
const categories = deps => {
  return {
    all () {
      return new Promise((resolve, reject) => {
        const { connection } = deps
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) reject(error)
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
