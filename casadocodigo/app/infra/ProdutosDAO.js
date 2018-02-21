class ProdutosDAO {
    constructor(connection) {
        this._connection = connection
    }
    
    lista(callback) {
        this._connection.query('select * from produtos', callback)
    } 
    
}

module.exports = () => {
    return ProdutosDAO
}
