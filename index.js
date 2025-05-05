const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use(bodyParser.json());

// Rotas públicas
app.use('/books', booksRouter);
app.use('/', usersRouter);

// Rotas protegidas
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
