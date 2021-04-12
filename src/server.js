const express = require('express');
const cors = require('cors');

const db = require('./database/db');
const routes = require('./routes/routes');

const app = express();

// conexão com o banco de dados
db.connect();

// habilitando o cors
// habilitando para qualquer site
// app.use(cors()); 

const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://www.app.com.br"
]

app.use(cors({ // habilitando para servidores especificos
  origin: function(origin, callback) {

    // permite requests sem 'origin' - exemplo: mobile apps
    if (!origin) return callback(null, true);

    // verifica se o 'origin' esta na lista de permitidos
    if (!allowedOrigins.includes(origin)) return callback(null, false);

    // autoriza request
    return callback(null, true);
  }
}));

// Habilita server para receber dados Json
app.use(express.json());

// definindo as rotas
app.use('/api', routes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});