const express = require('express');
// Forma padrão de invocar o express
const app = express();
const port = 3000;

// settando a engine do ejs
app.set('view engine', 'ejs');

// Criando rotas
app.get('/produtos', (req, res) => {
    res.render('produtos/lista');
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
