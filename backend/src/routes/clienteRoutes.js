const express = require('express');

const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/:telefono', clienteController.buscarCliente);

router.post('/', clienteController.crearCliente);

module.exports = router;