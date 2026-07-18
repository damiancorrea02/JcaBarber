const express = require('express');
const router = express.Router();

const turnoController = require('../controllers/turnoController');

router.post('/', turnoController.crearTurno);

module.exports = router;