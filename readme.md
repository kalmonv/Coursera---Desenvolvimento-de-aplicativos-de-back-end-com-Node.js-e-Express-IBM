# Projeto: API de Livraria com Node.js e Express

Este é um projeto desenvolvido como parte do curso **"Desenvolvimento de aplicativos de back-end com Node.js e Express"**. A aplicação fornece uma API REST para gerenciar livros e resenhas, com funcionalidades para usuários gerais e registrados.

## 🚀 Funcionalidades

### 📚 Usuários Gerais
- Obter a lista de livros disponíveis
- Obter livros por ISBN
- Obter livros por autor
- Obter livros por título
- Obter resenha de um livro
- Registrar novo usuário
- Fazer login como usuário registrado

### 🔐 Usuários Registrados (autenticados)
- Adicionar ou modificar uma resenha de livro
- Excluir a própria resenha de livro

### ⚙️ Métodos com Axios (Async/Await ou Promises)
- Obter todos os livros (callback assíncrono)
- Pesquisar por ISBN (promessa)
- Pesquisar por autor
- Pesquisar por título

## 🧰 Tecnologias Utilizadas

- Node.js
- Express
- Axios
- JavaScript (ES6+)
- JSON como base de dados simulada
- Middleware para autenticação (opcional)

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
