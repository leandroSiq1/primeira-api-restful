const express = require('express');

const db = require('./database/db');
const routes = require('./routes/routes');

const app = express();

// conexão com o banco de dados
db.connect();

// Habilita server para receber dados Json
app.use(express.json());

// definindo as rotas
app.use('/api', routes)


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});