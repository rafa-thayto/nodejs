const app = require('./config/express')();
const rotasProdutos = require('./app/routes/produtos')(app);

const port = 3003;

app.listen(port , () => {
    console.log('Server rodando na porta ' + port);
});

