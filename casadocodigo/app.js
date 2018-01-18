const express = require('express');
// Forma padrão de invocar o express
const app = express();
const port = 3000;

// Criando rotas
app.get('/produtos', (req, res) => {
    res.send(`
    <html>
    <body>
        <h1>Listagem de produtos</h1>
    </body>
    </html>`);
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
