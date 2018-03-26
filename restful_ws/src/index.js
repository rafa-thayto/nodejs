
require('dotenv').config()
const server = require('./server')
const port = 3456

server.listen(port, () => console.log(`Server listening on http://localhost:${port}`))
