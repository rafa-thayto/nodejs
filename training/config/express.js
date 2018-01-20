const app = require('express')()

app.set('view engine', 'ejs')
app.set('view', './app/views')
module.exports = () => app
