const router = require('express').Router();

const ProductsController = require('../controllers/products')

{// Verbos http (4 tipos)
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados
}

router.get('/products/:id?', ProductsController.get);
router.post('/products', ProductsController.post);
router.put('/products/:id', ProductsController.put);
router.delete('/products/:id', ProductsController.remove);

module.exports = router;