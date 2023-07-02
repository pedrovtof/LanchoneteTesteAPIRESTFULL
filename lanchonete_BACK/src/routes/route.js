const router = require('express').Router();

const PedidosControler = require('../controllers/pedidos');
const ClientesControler = require('../controllers/clientes');
const ProdutosControler = require('../controllers/produtos');


//api
router.get('/pedidos/', PedidosControler.get)
router.get('/clientes/', ClientesControler.get)
router.get('/products/', ProdutosControler.get)



module.exports = router

