const express = require('express')
const consign = require('consign')
const app = express()

// Settando a engine de view
app.set('view engine', 'ejs')
app.set('views', './app/views')

consign()
  .include('app/routes')
  .into(app)

module.exports = app