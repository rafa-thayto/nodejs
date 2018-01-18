const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.end(`
    <html>
    <body>
        <h1>Listagem dos produtos</h1>
    </body>
    </html>`);
});

// Start node server
server.listen(port);
console.log(`Listen in port: ${port}`);
