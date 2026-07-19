const express = require('express');
const router = express.Router();

const turnoController = require('../controllers/turnoController');

router.post('/', turnoController.crearTurno);
router.get('/', turnoController.obtenerTurnos);

module.exports = router;