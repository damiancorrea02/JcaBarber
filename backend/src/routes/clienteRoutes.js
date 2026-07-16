const express = requie('express');

const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/:telefono', clienteController.buscarCliente);

module.exports = router;