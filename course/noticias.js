const http = require('http')
const PORT = 3000


const server = http.createServer((req, res) => {

  let categoria = req.url
  if (categoria === '/tecnologia')
    res.end('<html><body><h1>Bem vindo a pagina de tecnologia</h1></body></html>')
  else if (categoria === '/moda')
    res.end('<html><body><h1>Bem vindo a pagina de moda</h1></body></html>')    
  else if (categoria === '/beleza')
    res.end('<html><body><h1>Bem vindo a pagina de beleza</h1></body></html>')    
  else
    res.end('<html><body>Bem vindo a home page</body></html>')
 
}).listen(PORT, () => console.log(`Server listenning on port: ${PORT}`))