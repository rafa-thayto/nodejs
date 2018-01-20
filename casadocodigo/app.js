const app = require('./config/express')();
const rotasProdutos = require('./app/routes/produtos')(app);

const port = 3000;


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
