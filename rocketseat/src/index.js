const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

// Isso é para o express entender que vai 
// receber informações em JSON
app.use(bodyParser.json());
// Para o express entender os paâmetros passados pela url
app.use(bodyParser.urlencoded({extended: true}));

require('./controllers/authController')(app);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
