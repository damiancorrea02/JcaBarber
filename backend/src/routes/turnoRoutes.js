const express = require('express');
const router = express.Router();

const turnoController = require('../controllers/turnoController');

router.post('/', turnoController.crearTurnos);

module.exports = router;