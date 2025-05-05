const { users } = require('../data/users');

function authMiddleware(req, res, next) {
  const username = req.headers['username'];
  if (!username || !users.find(u => u.username === username)) {
    return res.status(401).json({ message: 'Usuário não autenticado' });
  }
  req.user = username;
  next();
}

module.exports = authMiddleware;
