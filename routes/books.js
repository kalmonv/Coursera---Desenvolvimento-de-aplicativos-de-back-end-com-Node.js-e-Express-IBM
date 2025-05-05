const express = require('express');
const router = express.Router();
const books = require('../data/books');

// Tarefa 1: Listar todos os livros
router.get('/', (req, res) => res.json(books));

// Tarefa 2: Obter por ISBN
router.get('/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  book ? res.json(book) : res.status(404).json({ message: 'Livro não encontrado' });
});

// Tarefa 3: Obter por autor
router.get('/author/:author', (req, res) => {
  const results = Object.values(books).filter(b => b.author === req.params.author);
  res.json(results);
});

// Tarefa 4: Obter por título
router.get('/title/:title', (req, res) => {
  const results = Object.values(books).filter(b => b.title === req.params.title);
  res.json(results);
});

// Tarefa 5: Obter resenhas
router.get('/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  book ? res.json(book.reviews) : res.status(404).json({ message: 'Livro não encontrado' });
});

module.exports = router;
