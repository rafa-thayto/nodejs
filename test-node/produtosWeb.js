const http = require('http')
const port = 3000

http.createServer((req, res) => {
    if(req.url === '/produtos') {
        res.end(`
        <html>
        <body>
            <h1>Listando os produtos da loja</h1>
        </body>
        </html>`)
    } else {
        res.end(`
        <html>
        <body>
            <h1>Home</h1>
        </body>
        </html>
        `)
    }
}).listen(port) // Starting node server

console.log(`Listen in port: ${port}`)
