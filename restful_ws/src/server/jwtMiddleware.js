const jwt = require('jsonwebtoken')

const jwtMiddleware = deps => {
  return async (req, res, next) => {
    if (!deps.exclusions.includes(req.href())) {
      const token = req.headers['x-access-token']

      if (!token) {
        res.send(403, { erro: 'Token não fornecido' })
        return false
      }

      try {
        req.decoded = jwt.verify(token, process.env.JWT_SECRET)
      } catch (error) {
        res.send(403, { error: 'falha ao autenticar o token' })
        return false
      }

      // await jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      //   if (error) {
      //     res.send(403, { error: 'falha ao autenticar o token' })
      //   } else {
      //     req.decoded = decoded
      //   }
      // })
    }

    next()
  }
}

module.exports = jwtMiddleware
