const app = require('express')()
// or
// const app = express()
// settando a engine do ejs
app.set('view engine', 'ejs')
// setta o caminho da pasta views
// A pasta raíz é a app.js
app.set('views', './app/views')
module.exports = () => app
