
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const users = require('../users')({ connection, errorHandler })
const auth = require('../auth')({ connection, errorHandler })
const create = () => users.save('user@test.com', '123456')

// Limpa os dados da tabela antes de testar
test.beforeEach(t => connection.query('TRUNCATE TABLE users'))
// Garante que sempre a table seja "Truncada"
test.after.always(t => connection.query('TRUNCATE TABLE users'))

test('Login de usuário - sucesso', async t => {
  await create()
  const result = await auth.authenticate('user@test.com', '123456')
  t.not(result.token, null)
  t.not(result.token.length, 0)
})
