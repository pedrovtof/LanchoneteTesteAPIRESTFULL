const router = require('express').Router();

const PedidosControler = require('../controllers/pedidos');
const ClientesControler = require('../controllers/clientes');
const ProdutosControler = require('../controllers/produtos');


//api
router.get('/pedidos/', PedidosControler.get)

router.get('/clientes/:id?', ClientesControler.ListarClientes)
router.post('/login/:id?', ClientesControler.loginUser)
router.post('/clientes', ClientesControler.CriarCliente) 

router.get('/products/', ProdutosControler.get)



module.exports = router

