class ProdutosDAO {
    constructor(connection) {
        this._connection = connection
    }
    
    lista(callback) {
        this._connection.query('select * from produtos', callback)
    }

    salva(produto, callback) {
        this._connection.query('insert into produtos set ?', produto,  callback)
    }
    
}

module.exports = () => {
    return ProdutosDAO
}
