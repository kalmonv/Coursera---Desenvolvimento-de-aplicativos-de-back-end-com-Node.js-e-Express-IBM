const express = require('express');
const router = express.Router();
const books = require('../data/books');
const authMiddleware = require('../middleware/auth');

// Tarefa 8: Adicionar/editar resenha
router.put('/review/:isbn', authMiddleware, (req, res) => {
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

  book.reviews[req.user] = req.body.review;
  res.json({ message: 'Resenha salva com sucesso' });
});

// Tarefa 9: Excluir resenha
router.delete('/review/:isbn', authMiddleware, (req, res) => {
  const book = books[req.params.isbn];
  if (!book || !book.reviews[req.user]) {
    return res.status(404).json({ message: 'Resenha não encontrada' });
  }

  delete book.reviews[req.user];
  res.json({ message: 'Resenha excluída com sucesso' });
});

module.exports = router;
