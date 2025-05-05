const express = require('express');
const router = express.Router();
const { registerUser, authenticateUser } = require('../data/users');

// Tarefa 6: Registro
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (registerUser(username, password)) {
    res.json({ message: 'Usuário registrado com sucesso' });
  } else {
    res.status(400).json({ message: 'Usuário já existe' });
  }
});

// Tarefa 7: Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  authenticateUser(username, password)
    ? res.json({ message: 'Login bem-sucedido' })
    : res.status(401).json({ message: 'Credenciais inválidas' });
});

module.exports = router;
