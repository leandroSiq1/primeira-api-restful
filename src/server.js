const express = require('express');

const app = express();

// const db = require('./database');
const routes = require('./routes/routes');


// habilitando server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }));


// definindo as rotas
app.use('/api', routes)


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});