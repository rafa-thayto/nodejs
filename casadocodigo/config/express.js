const express = require('express');
const load = require('express-load');


module.exports = function() {
    const app = express();

    // or const app = express()
    // settando a engine do ejs
    app.set('view engine', 'ejs');
    // setta o caminho da pasta views
    // A pasta raíz é a app.js
    app.set('views', './app/views');

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
};
